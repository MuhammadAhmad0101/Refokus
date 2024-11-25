import Product from "./Product";

function Products() {
      const ProductData = [
            {
                  title: "Arqitel",
                  description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
                  live: true,
                  caseStudyButton: false,
            },
            {
                  title: "TTR",
                  description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
                  live: true,
                  caseStudyButton: false,
            },
            {
                  title: "YIR 2022",
                  description: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
                  live: true,
                  caseStudyButton: true,
            },
            {
                  title: "Yahoo!",
                  description: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
                  live: true,
                  caseStudyButton: true,
            },
      ];
      return (
            <div className="text-white w-full mt-20">
                  {ProductData.map((item, index) => (
                        <Product key={index} product={item} />
                  ))}
            </div>
      );
}

export default Products;
