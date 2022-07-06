import React from "react";
import "./aboutus.css";
export const AboutUs = () => {
  return (
    <div className="AboutUs">
        <div className="AboutCompany">
          <h1>Who We Are !!</h1>
          <p>We’re a dedicated team of financial professionals that specialize in helping medical professionals & business owners with all their financial planning considerations. We are process-driven, not transactional or product-pushers.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quod eligendi excepturi totam distinctio! Sit sapiente magni enim corrupti veritatis inventore laboriosam rem quam ipsum omnis aliquid, ipsa error quae!
          </p>
          <h1>
            What We Do !!
          </h1>
          <p>We’re a dedicated team of financial professionals that specialize in helping medical professionals & business owners with all their financial planning considerations. We are process-driven, not transactional or product-pushers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda aut quis officiis quibusdam earum temporibus numquam possimus, officia repellat tempora minus facere a sed animi eos voluptates atque excepturi!</p>

          <h1>How We Help !!</h1>
          <p>We’re a dedicated team of financial professionals that specialize in helping medical professionals & business owners with all their financial planning considerations. We are process-driven, not transactional or product-pushers Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quo similique natus saepe, exercitationem consequuntur totam corrupti ratione labore! Voluptatem exercitationem praesentium veritatis nam at nisi blanditiis doloremque optio eos.</p>
        </div>
        <div className="ContactUs">
        <input type="checkbox" id="click"/>
  <div class="main">
    <label for="click">Contact</label>
    <span class="fab fa-instagram"></span>
    <span class="fab fa-twitter"></span>
    <span class="fab fa-facebook-f"></span>
    <span class="fas fa-envelope"></span>
  </div>
        </div>
    </div>
  );
};
