import React from "react";
import TopItem from "./TopItem";
import ContentBox from "./ContentBox";
const BlogSection = ()=>{
    return(
   <section id="blog_section" className="container_fluid blog_section">
  <div className="container">
  <TopItem
          btnHeading="Latest News"
          title="Latest News & Blog"
          desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        />
    <div className="bottom_item">
    <ContentBox
      img={`./assets/images/blog/1.jpg`} 
      logo={"./assets/images/blognews.jpg"}
      logotitle="by tim nortion" 
      title= "Make your team a Design driven company"
      desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, 
       cumque iste repellat consequuntur tenetur."
      />
      
      <ContentBox
      img={`./assets/images/blog/2.jpg`} 
      logo={"./assets/images/blognews.jpg"}
      logotitle="by tim nortion" 
      title= "Make your team a Design driven company"
      desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, 
       cumque iste repellat consequuntur tenetur."
      />
   <ContentBox
      img={`./assets/images/blog/3.jpg`} 
      logo={"./assets/images/blognews.jpg"}
      logotitle="by tim nortion" 
      title= "Make your team a Design driven company"
      desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, 
       cumque iste repellat consequuntur tenetur."
      />
    </div>
  </div>
</section>

    )
}

export default BlogSection