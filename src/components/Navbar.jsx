import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand navbar-light"
        style={{
          background: "white",
          borderBottom: "1px solid rgb(236, 236, 236)",
        }}
      >
        <div className="container-nav">
          <a className="navbar-brand" href="/LeaderBoard">
            <img
              src="src\assets\media\unfluke.png"
              alt=""
              style={{ width: "120px" }}
            />
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-icons">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownNotification"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="src\assets\media\notification.png"
                    alt="notifications"
                    className="img-fluid"
                    style={{ height: "25px" }}
                  />
                  <IoMdArrowDropdown />
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownNotification"
                  style={{
                    padding: "0px",
                    left: "0px",
                    width: "300px",
                    maxHeight: "400px",
                    overflow: "auto",
                  }}
                ></ul>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  style={{ border: "none", backgroundColor: "inherit" }}
                  fdprocessedid="ztu5vo"
                >
                  {" "}
                  <div>
                    <img
                      src="src\assets\media\coin.9bfaef7e.jpeg"
                      alt="coin"
                      className="img-fluid mt-1"
                      style={{ height: "25px" }}
                    />
                  </div>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link px-0 me-3 mt-1"
                  style={{ border: "none", backgroundColor: "inherit" }}
                  fdprocessedid="2cm2iy"
                >
                  0
                </button>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "none", backgroundColor: "inherit" }}
                  fdprocessedid="53m4yo"
                >
                  <img
                    src="src\assets\media\monkey.5456259d.jpg"
                    alt="user"
                    className="img-fluid"
                    style={{
                      height: "30px",
                      borderRadius: "50px",
                      border: "1px solid black",
                    }}
                  />
                  <IoMdArrowDropdown />
                </button>
                <ul
                  className="dropdown-menu shadow-sm  rounded-0 mt-3"
                  aria-labelledby="navbarDropdown"
                  style={{
                    padding: "0px",
                    left: "0px",
                    borderTop: "2px solid whitesmoke",
                  }}
                >
                  <li className="p-2">
                    <a className="dropdown-item" href="/profile">
                      My Profile
                    </a>
                  </li>
                  <li className="p-2">
                    <a className="dropdown-item" href="/leads">
                      My Earnings
                    </a>
                  </li>
                  <li className="p-2">
                    <a className="dropdown-item" href="/funds">
                      Funds
                    </a>
                  </li>
                  <li className="p-2">
                    <a className="dropdown-item" href="/change-password">
                      Change Password
                    </a>
                  </li>
                  <li className="p-2">
                    <a
                      className="dropdown-item"
                      href="/"
                      style={{ color: "red" }}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/LeaderBoard"
                  style={{
                    color: "black",
                    fontSize: "15px",
                    paddingLeft: "20px",
                    fontWeight: "600",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-microsoft"
                    viewBox="0 0 16 16"
                    style={{ marginRight: "10px", marginBottom: "2px" }}
                  >
                    <path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z"></path>
                  </svg>
                  LeaderBoard
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    color: "black",
                    fontSize: "15px",
                    paddingLeft: "20px",
                    fontWeight: "600",
                  }}
                >
                  Historical Trading <IoMdArrowDropdown />
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{ left: "90px" }}
                >
                  <a
                    className="dropdown-item"
                    href="/historictrading"
                    style={{ color: "black" }}
                  >
                    Trading
                  </a>
                  <a
                    className="dropdown-item"
                    href="/historicOrders"
                    style={{ color: "black" }}
                  >
                    Order
                  </a>
                  <a
                    className="dropdown-item"
                    href="/historicholdings"
                    style={{ color: "black" }}
                  >
                    Holding
                  </a>
                  <a
                    className="dropdown-item"
                    href="/historicpositions"
                    style={{ color: "black" }}
                  >
                    Position
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/historicalchart"
                  style={{
                    color: "black",
                    fontSize: "15px",
                    paddingLeft: "20px",
                    fontWeight: "600",
                  }}
                >
                  Historical Chart
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/scanners"
                  style={{
                    color: "black",
                    fontSize: "15px",
                    paddingLeft: "20px",
                    fontWeight: "600",
                  }}
                >
                  Scanners
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/alerts"
                  style={{
                    color: "black",
                    fontSize: "15px",
                    paddingLeft: "20px",
                    fontWeight: "600",
                  }}
                >
                  Alerts
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/BasicBacktestHome"
                  style={{
                    color: "black",
                    fontSize: "15px",
                    paddingLeft: "20px",
                    fontWeight: "600",
                  }}
                >
                  Basic Backtest
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/AdvancedBacktestHome"
                  style={{
                    color: "black",
                    fontSize: "15px",
                    paddingLeft: "20px",
                    fontWeight: "600",
                  }}
                >
                  Advanced Backtest
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/pricing"
                  style={{
                    color: "black",
                    fontSize: "15px",
                    paddingLeft: "20px",
                    fontWeight: "600",
                  }}
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/leads"
                  style={{
                    color: "black",
                    fontSize: "15px",
                    paddingLeft: "20px",
                    fontWeight: "600",
                  }}
                >
                  My Earnings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
