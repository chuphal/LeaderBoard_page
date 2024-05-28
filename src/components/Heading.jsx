import React from "react";
import { IoHomeOutline } from "react-icons/io5";

const Heading = () => {
  return (
    <div>
      <div className="container">
        <div className="block-header">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-12">
              <h2 className="leader-heading">LeaderBoard</h2>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a
                    href="trading"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <IoHomeOutline />/
                  </a>
                </li>
                <li className="breadcrumb-item active">
                  <a
                    href="scanners"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    LeaderBoard
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-7 col-md-4 col-sm-12 text-right">
              <div className="inlineblock text-center m-r-15 m-l-15 hidden-sm">
                <a
                  href="https://www.youtube.com/watch?v=5V6Wn1wTQM0"
                  target="_blank"
                  style={{ display: "flex", gap: "10px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="34"
                    id="youtube"
                  >
                    <path
                      fill="#CE1312"
                      fillRule="evenodd"
                      d="m19.044 23.27-.002-13.582 12.97 6.814-12.968 6.768zM47.52 7.334s-.47-3.33-1.908-4.798C43.786.61 41.741.601 40.803.489 34.086 0 24.011 0 24.011 0h-.022S13.914 0 7.197.49c-.939.111-2.983.12-4.81 2.046C.948 4.003.48 7.334.48 7.334S0 11.247 0 15.158v3.668c0 3.912.48 7.823.48 7.823s.468 3.331 1.907 4.798c1.827 1.926 4.225 1.866 5.293 2.067C11.52 33.885 24 34 24 34s10.086-.015 16.803-.505c.938-.113 2.983-.122 4.809-2.048 1.439-1.467 1.908-4.798 1.908-4.798s.48-3.91.48-7.823v-3.668c0-3.911-.48-7.824-.48-7.824z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
