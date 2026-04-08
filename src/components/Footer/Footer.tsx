import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <div className="grid justify-items-center bg-gray-700 py-15">
        <div className="flex gap-10 text-white font-averia">
          <p>About</p>
          <p>Pricing</p>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>Contact Us</p>
        </div>
        <div className="grid justify-items-center py-8">
          <img src="./icon.png" />
        </div>
        <div>
          <p className="text-sm text-white font-averia">
            © Copyright by{" "}
            <span className="underline underline-offset-4 font-bold">
              Mahyar MousaviNia
            </span>
            . Use for learning or your portfolio. Don't claim as your own
            product.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
