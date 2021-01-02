import React from "react";
import "./styles.css";

function Head() {
  return (
    <div className="intro">
      <h1>MY BLOG</h1>
      <p>
        {" "}
        Welcome to the blog of <span className="unk">unknown</span>{" "}
      </p>
    </div>
  );
}

function Cart1() {
  return (
    <div className="cart">
      <div className="back">
        <img
          className="back"
          src="https://wallsdesk.com/wp-content/uploads/2016/12/Dubrovnik-Pictures.jpg"
        />
      </div>
      <section>
        <h2>TITLE HEADING</h2>
      </section>
      <p>
        Title description, <span className="gr">April 7, 2014</span>
      </p>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. and
        more recently with desktop
      </p>
      <button> Read more</button>
    </div>
  );
}
function Cart2() {
  return (
    <div className="cart">
      <div className="back">
        <img
          className="back"
          src="https://wallsdesk.com/wp-content/uploads/2016/12/Dubrovnik-Pictures.jpg"
        />
      </div>
      <section>
        <h2>TITLE HEADING</h2>
      </section>
      <p>
        Title description, <span className="gr">April 7, 2014</span>
      </p>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. and
        more recently with desktop
      </p>
      <button> Read more</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Head />
      <br />
      <Cart1 />
      <br />
      <Cart2 />
    </div>
  );
}

/* <div class="intro">
<h1>MY BLOG</h1>
<p> Welcome to the blog of <span class="unk">unknown</span> </p>
</div>

<br>

<div class="cart"><div class="back"></div>
<section><h2>TITLE HEADING</h2></section>
<p>Title description, <span class="gr">April 7, 2014</span></p>

<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen  and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. and
        more recently with desktop
</p>
<button> Read more</button>
<p> <b>Comments</b> </p>
</div> 

 

<footer></footer>*/
