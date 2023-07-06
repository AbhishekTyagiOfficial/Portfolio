import React from "react";
import { Link } from "react-router-dom";

export default function Price() {
  return (
    <div>
      <div className="container">
        <div className="row ">
          <span className="subtitle text-start"> Pricing</span>
          <div className="col-md-4 col-sm-12 col-xs-12">
            <h2 className="text-start">Pricing</h2>
          </div>
          <div className="col-md-8 col-sm-12 col-xs-12">
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              illo veniam doloribus, officiis maxime id numquam itaque ab magnam
              obcaecati suscipit laborum, cum, ullam fuga libero blanditiis
              aliquid provident rem aspernatur eligendi facilis omnis nobis?
              Nisi, voluptatibus rerum! Accusamus, omnis asperiores. Vitae et
              totam alias dignissimos praesentium.
            </p> */}
            <div className="row">
              <h2
                className="title_education mb-5"
                // data-aos="fade-down"
                // data-aos-duration="1500"
              >
                My Education
              </h2>

              <div
                className="col-md-4 col-sm-12 col-xs-12 "
                // data-aos="fade-down"
                // data-aos-duration="1500"
              >
                <Link to="bsc">
                  <div className="btn btn-dark w-100 p-3 mb-5">
                    <span className="">GRADUATION</span>
                  </div>
                </Link>
              </div>
              <div
                className="col-md-4 col-sm-12 col-xs-12 "
                // data-aos="fade-down"
                // data-aos-duration="1500"
              >
                <Link to="intermediate">
                  <div className="btn btn-dark w-100 p-3 mb-5">
                    <span>INTERMEDIATE</span>
                  </div>
                </Link>
              </div>
              <div
                className="col-md-4 col-sm-12 col-xs-12 "
                // data-aos="fade-down"
                // data-aos-duration="1500"
              >
                <Link to="matrix">
                  <div className="btn btn-dark w-100 p-3 mb-5">
                    <span>MATRICULATE</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
