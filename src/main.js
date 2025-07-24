import { listProjects } from "./projects.js";

const projects = document.querySelectorAll(".projects-list img");
const modal = document.getElementById("modal");
const fade = document.getElementById("fade");

projects.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");

    const projectIndex = index;
    createModal(projectIndex);
  });
});

const createModal = (idProject) => {
  const currentProject = listProjects.find((p) => p.id == idProject);
  // console.log(currentProject.tecnologia[1]);
  modal.innerHTML = "";

  const div = document.createElement("div");
  div.innerHTML = `
          <div class="modal-head">
            <h2>${currentProject.titulo}</h2>
            <button id="close-modal">✖</button>
        </div>

        <Div class="modal-body">
            <img class="img-modal" src="${currentProject.img}" alt="${currentProject.titulo}">
            <div class="modal_body_info">
                <div>
                    <P>${currentProject.descricao}</P>
                </div>
                
                <div>
                    <P>Tecnologia Utilizada</P>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVASCRIPT</li>
                    </ul>
                </div>
            </div>
        </Div>

        <div class="modal-footer">           
                 <p>
                    <img src="https://images.emojiterra.com/twitter/v13.1/512px/1f310.png"  alt="Ícone-Globo">
                    <a href="${currentProject.linkSite}" target="_blank">Link do site</a>
                </p>

                <p>
                    <img src="https://img.icons8.com/?size=100&id=ARy6tFUfwclb&format=png&color=000000" alt="Ícone-GitHub">
                    <a href="${currentProject.linkGithub}" target="_blank">Link do GitHub</a>
                </p>              
        </div>
    `;

  modal.append(div);

  const buttonCloseModal = document.getElementById("close-modal");
  buttonCloseModal.onclick = closeModal;
};

const closeModal = () => {
  console.log("o botao foi clicado");
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};
