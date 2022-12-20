import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [profile, setProfile] = useState(true);
  useEffect(() => {
    if (location.pathname === "/") {
      setProfile(false);
    } else {
      setProfile(true);
    }
  }, [location]);

  return (
    <div className="header">
      <div className="header__container">
        <button
          onClick={() => {
            profile ? navigate("/dashboard") : navigate("/");
          }}
          className="header__container__logo"
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 133.000000 176.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,176.000000) scale(0.100000,-0.100000)"
              fill="currentColor"
              stroke="none"
            >
              <path
                d="M7 1458 c-4 -166 -7 -446 -7 -622 l0 -321 110 110 110 110 0 402 0
403 376 0 376 0 37 32 c20 17 74 67 120 110 l84 78 -600 0 -600 0 -6 -302z"
              />
              <path
                d="M1218 1532 l-108 -111 0 -400 0 -401 -377 0 -378 0 -117 -110 -118
-110 599 0 599 0 7 223 c3 122 5 401 3 620 l-3 399 -107 -110z"
              />
              <path d="M450 1085 l0 -215 220 0 220 0 0 215 0 215 -220 0 -220 0 0 -215z" />
              <path
                d="M873 233 c-86 -16 -103 -150 -22 -184 18 -7 29 -19 29 -30 0 -12 7
-19 20 -19 13 0 20 7 20 18 0 10 12 22 30 29 40 15 66 70 54 114 -14 50 -73
82 -131 72z m71 -59 c20 -20 20 -58 0 -78 -33 -34 -104 -8 -104 37 0 49 70 76
104 41z"
              />
              <path
                d="M887 154 c-14 -15 -6 -34 14 -34 14 0 19 5 17 17 -3 18 -20 27 -31
17z"
              />
              <path
                d="M300 135 c0 -88 1 -95 20 -95 19 0 20 7 20 95 0 88 -1 95 -20 95 -19
0 -20 -7 -20 -95z"
              />
              <path
                d="M370 210 c0 -18 7 -20 54 -20 30 0 58 -5 61 -10 13 -22 -17 -40 -66
-40 -37 0 -49 -4 -49 -15 0 -24 121 -21 143 3 23 25 21 58 -3 82 -16 16 -33
20 -80 20 -53 0 -60 -2 -60 -20z"
              />
              <path
                d="M562 138 c3 -88 4 -93 26 -96 20 -3 22 1 22 37 0 40 1 41 35 41 24 0
35 5 35 15 0 10 -11 15 -35 15 -34 0 -35 1 -35 40 0 36 -2 40 -25 40 l-26 0 3
-92z"
              />
              <path
                d="M710 135 c0 -95 0 -95 25 -95 25 0 25 0 25 95 0 95 0 95 -25 95 -25
0 -25 0 -25 -95z"
              />
            </g>
          </svg>
        </button>
        {window.localStorage.getItem("isNotFirst") && profile ? (
          <div className="header__container__name__btn">John doe</div>
        ) : null}
        <div className="header__container__btn">
          {profile ? (
            <Link
              to="/profile"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="header__btn__profile"
            >
              <svg
                width="19"
                height="21"
                viewBox="0 0 19 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.14111 9.46972C11.3893 9.46972 13.2119 7.64716 13.2119 5.39892C13.2119 3.15068 11.3893 1.32812 9.14111 1.32812C6.89287 1.32812 5.07031 3.15068 5.07031 5.39892C5.07031 7.64716 6.89287 9.46972 9.14111 9.46972Z"
                  stroke="currentColor"
                  strokeWidth="1.72003"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 19.6453V15.5745C1 14.4503 1.91128 13.5391 3.0354 13.5391H15.2478C16.3719 13.5391 17.2832 14.4503 17.2832 15.5745V19.6453"
                  stroke="currentColor"
                  strokeWidth="1.72003"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Profile
            </Link>
          ) : (
            <Link to="/signIn" className="header__btn__get__started">
              Get Started
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
