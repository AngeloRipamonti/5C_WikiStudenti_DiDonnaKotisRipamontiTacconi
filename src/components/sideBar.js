export function sideBarComponent(parentElement, pubSub) {
    let callback;
    let links;
    let title;
   

    const variable = {
        0: `<aside class="doc__nav">
        <ul>
          <li class="js-btn selected">Editor</li>
          <li class="js-btn">Approver</li>
        </ul>
      </aside>`,

        1:  `<ul class="nav flex-column ">
        <li class="nav-item"><a class="nav-link" href="#UML">UML/ER/Logic Model</a>
        </li>
    </ul>`

      };
      let index;

      pubSub.subscribe("sidebar", (data)=> {
        console.log(data);
        variable[1] = `<ul class="nav flex-column ">${data.map(element => {
            return  `<li class="nav-item"><a class="nav-link" href="#${element.id}">${element.title}</a>
        </li>`
        })}
    </ul>`;
      });
     
    return {
        /*build: (tit, linkList) => {
            title = tit;
            links = linkList;
        },
*/
        build: (value) => {

        index = value;

        },

        render: () => {
            parentElement = variable[index];
        },


        renderLogged: () => {
            let sideBar = `
                <div class = "sidebar" style = "width: 250px; height: 100vh; background-color: #f0f0f0; padding: 16px; position: fixed" >
                <h2 class="sidebar-title" style="color: #333; font-size: 24px; font-weight: bold;">${title}</h2>
                    <div class="sidebar-links" style="margin-top: 20px;">
                        ${links.map(link => `
                            <a href="#" class="sidebar-link" style="display: block; color: #333; margin: 8px 0; text-decoration: none; font-size: 18px;" onclick="event.preventDefault(); handleLink('${link.id}')">
                                ${link.text}
                            </a>
                        `).join('')}
                    </div>
                </div>
                `;
        },

        editor: () => {

        },

        render: () => {
            if (!title || !links) return false;

            let newSidebar = `
                <div class="sidebar" style="width: 250px; height: 100vh; background-color: #f0f0f0; padding: 16px; position: fixed;">
                    <h2 class="sidebar-title" style="color: #333; font-size: 24px; font-weight: bold;">${title}</h2>
                    <div class="sidebar-links" style="margin-top: 20px;">
                        ${links.map(link => `
                            <a href="#" class="sidebar-link" style="display: block; color: #333; margin: 8px 0; text-decoration: none; font-size: 18px;" onclick="event.preventDefault(); handleLink('${link.id}')">
                                ${link.text}
                            </a>
                        `).join('')}
                    </div>
                </div>`;

            parentElement.innerHTML = newSidebar;

            window.handleLink = (linkId) => {
                callback(linkId);
            }
        },
        callback(value) {
            callback = value;
        }
    }
    //lato build riceve come parametro che tipo sidebar e in base al tipo inizializzo attributi in modo diversi, facendo fatch ala database
}

/*
const variable = {
  0: "template",
  1: "template",
  2: "template"
};
let index;


build: (value) => {
  index = value;
}

render: () => {
  parentElement = variable[index];
}
*/
