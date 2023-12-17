import { useState } from "react";
import "./App.css";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleClickContentModal() {
    if (isOpenModal) {
      setIsOpenModal(false);
    }
  }

  return (
    <div onClick={handleClickContentModal} className="content">
      <div className="post">
        <h1>Titulo do post</h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ipsam
        explicabo sit incidunt earum repudiandae, similique voluptas, vero
        veritatis nulla praesentium exercitationem numquam ea laudantium veniam
        quod enim dolor ducimus. Placeat, nihil eum atque totam aperiam ratione
        consectetur voluptate tempore ut rem minima quasi qui repellat id
        explicabo magnam quidem nisi iste earum dignissimos, voluptatum corporis
        iure cupiditate. Accusantium, veritatis! Praesentium molestiae neque
        quos soluta sit omnis culpa, distinctio, aut incidunt quae nobis
        assumenda saepe qui quaerat, dolores consequuntur. Impedit aliquam quis
        eius beatae hic et esse rerum laborum veniam?
      </div>

      <button onClick={() => setIsOpenModal(true)} className="button">
        Ler mais
      </button>

      {isOpenModal ? (
        <div className="modal">
          <h1>Modal</h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
          doloribus qui quidem minus itaque, ad nostrum. Dicta, praesentium odio
          vero ipsum obcaecati repellat nam natus ea corrupti fugiat. Molestiae,
          quasi? Corporis, reprehenderit omnis quod iusto incidunt doloribus
          maiores beatae. Dolor architecto sed, earum, aspernatur itaque sint
          vel a qui eius dolores facilis praesentium nihil mollitia maiores
          nesciunt molestias ut perspiciatis. Rerum eum dolores accusantium iure
          ducimus, animi ab ex eos fugit, repellendus aut alias aliquam unde, ut
          maxime tempora soluta magni. Voluptatum maxime officiis vel id ullam
          dignissimos cum voluptatibus? Mollitia tenetur quasi velit nulla
          veritatis quas architecto nesciunt odit laborum. Tempore animi facilis
          quidem ut, laudantium odit totam voluptatibus, quis magnam, aspernatur
          culpa quam minus. Dolores doloremque alias quod? Dolores omnis
          deserunt fugiat repellendus dolorem maiores officiis explicabo.
          Tempore, tempora nesciunt saepe officiis ut enim architecto eveniet
          odit accusantium quasi veritatis ullam molestias quos quis blanditiis
          obcaecati? Odit, odio.
          <button onClick={() => setIsOpenModal(false)}>Fechar</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
