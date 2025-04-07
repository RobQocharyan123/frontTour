import React from "react";
import "./Contact.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import img2 from "../../Assets/2.png";
import img3 from "../../Assets/3.png";
import img4 from "../../Assets/4.png";
import img5 from "../../Assets/5.png";
import img6 from "../../Assets/6.png";
import img7 from "../../Assets/7.png";
import { ContactUs } from "./ContactUs/ContactUs";
import { Faq } from "./Faq/Faq";

const arr = [
  { id: "2", img: img2 },
  { id: "3", img: img3 },
  { id: "4", img: img4 },
  { id: "5", img: img5 },
  { id: "6", img: img6 },
  { id: "7", img: img7 },
];

const Contact = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleScrollToInfo = () => {
    navigate("/monitoring");
  };

  return (
    <>
      <div className="about">
        <h2>{t("about.title")}</h2>
        <div className="aboutText">
          <p>{t("about.subTitle1")}</p>
          <p>{t("about.subTitle2")}</p>
          <p>{t("about.subTitle3")}</p>
          <p>{t("about.subTitle4")}</p>
        </div>
        <div className="aboutButtons">
          <button onClick={handleScrollToInfo}>{t("about.startButton")}</button>
          {/* <button>{t("about.succesNumber")}</button> */}
        </div>

        {/* <Info /> */}
        <div className="workWithUs">
          <h2>{t("about.workWithUs")}</h2>
          <div className="partners">
            {arr &&
              arr.map((i, index) => {
                return (
                  <div className="partnersLogo" key={index}>
                    <img src={i.img} alt="partners" />
                  </div>
                );
              })}
          </div>
        </div>

        <div className="aboutVirtual">
          <h3>{t("about.aboutVirtual")}</h3>
          <h1>{t("about.warningVirtual")}</h1>
          <div className="virtualText">
            <p>{t("about.virtualText1")}</p>
            <p>{t("about.virtualText2")}</p>
          </div>

          <div className="virtualPartners">
            <div className="virtualSection">
              <div className="virtualLogo">
                <svg
                  width="23"
                  height="27"
                  viewBox="0 0 23 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4231 0L0 4.42561V10.3264C0.00206466 13.9847 1.10162 17.5524 3.14732 20.5383C5.19301 23.5243 8.08426 25.7818 11.4231 27C14.7619 25.7818 17.6531 23.5243 19.6988 20.5383C21.7445 17.5524 22.8441 13.9847 22.8462 10.3264V4.42561L11.4231 0Z"
                    fill="#131313"
                  />
                </svg>
              </div>
              <div className="virtualPartnerText">
                <h3>{t("about.hlrSearch")}</h3>
                <p>{t("about.hlrText")}</p>
              </div>
            </div>
            <div className="virtualSection">
              <div className="virtualLogo">
                <svg
                  width="33"
                  height="15"
                  viewBox="0 0 33 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.77841 14.5455H0L4.90767 0H9.58807L14.4957 14.5455H10.7173L7.30114 3.66477H7.1875L3.77841 14.5455ZM3.27415 8.82102H11.1719V11.4915H3.27415V8.82102Z"
                    fill="#131313"
                  />
                  <path
                    d="M16.0618 14.5455V0H22.0703C23.1593 0 24.0992 0.213068 24.8899 0.639205C25.6854 1.06061 26.2985 1.65009 26.7294 2.40767C27.1603 3.16051 27.3757 4.03646 27.3757 5.03551C27.3757 6.0393 27.1555 6.91761 26.7152 7.67045C26.2796 8.41856 25.657 8.99858 24.8473 9.41051C24.0376 9.82244 23.0765 10.0284 21.9638 10.0284H18.2564V7.25852H21.3104C21.8407 7.25852 22.2834 7.16619 22.6385 6.98153C22.9983 6.79688 23.2706 6.53883 23.4553 6.20739C23.6399 5.87121 23.7322 5.48059 23.7322 5.03551C23.7322 4.5857 23.6399 4.19744 23.4553 3.87074C23.2706 3.5393 22.9983 3.28362 22.6385 3.10369C22.2786 2.92377 21.8359 2.83381 21.3104 2.83381H19.5774V14.5455H16.0618Z"
                    fill="#131313"
                  />
                  <path
                    d="M32.6243 0V14.5455H29.1087V0H32.6243Z"
                    fill="#131313"
                  />
                </svg>
              </div>
              <div className="virtualPartnerText">
                <h3>{t("about.osnoviApi")}</h3>
                <p>{t("about.osnoviApiText")}</p>
              </div>
            </div>
            <div className="virtualSection">
              <div className="virtualLogo">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27 23.019V3.98091C27 1.78323 25.2168 0 23.0191 0H3.98091C1.78323 0 0 1.78323 0 3.98091V23.019C0 25.2167 1.78323 27 3.98091 27H23.0191C25.2168 27 27 25.2167 27 23.019ZM20.2814 16.4386C19.5907 16.4386 19.0256 15.8735 19.0256 15.1827V12.1186C19.0256 10.6367 18.4479 9.25534 17.4056 8.213C16.3633 7.17065 14.9819 6.59302 13.5 6.59302C10.6996 6.59302 8.35119 8.69021 8.0121 11.4656C7.93675 12.1563 7.30885 12.6461 6.61816 12.5581C5.9274 12.4828 5.4377 11.8549 5.52561 11.1642C6.00283 7.13301 9.43118 4.0814 13.5 4.0814C15.6475 4.0814 17.6693 4.92277 19.1889 6.42976C20.6958 7.94925 21.5372 9.97117 21.5372 12.1186V15.1827C21.5372 15.8735 20.9721 16.4386 20.2814 16.4386ZM21.5372 18.6362V21.6628C21.5372 22.3535 20.9721 22.9186 20.2814 22.9186C19.5907 22.9186 19.0256 22.3535 19.0256 21.6628V18.6362C19.0256 17.9456 19.5907 17.3804 20.2814 17.3804C20.9721 17.3804 21.5372 17.9456 21.5372 18.6362ZM13.5 10.7498C12.7465 10.7498 12.1311 11.3651 12.1311 12.1186V13.7888C12.1311 14.4795 11.5661 15.0446 10.8753 15.0446C10.1846 15.0446 9.6195 14.4795 9.6195 13.7888V12.1186C9.6195 9.98374 11.3651 8.23814 13.5 8.23814C15.6349 8.23814 17.3805 9.98374 17.3805 12.1186V21.5497C17.3805 22.2404 16.8154 22.8055 16.1247 22.8055C15.4339 22.8055 14.8689 22.2404 14.8689 21.5497V12.1186C14.8689 11.3651 14.2535 10.7498 13.5 10.7498ZM12.1311 17.2549V21.5497C12.1311 22.2404 11.5661 22.8055 10.8753 22.8055C10.1846 22.8055 9.6195 22.2404 9.6195 21.5497V17.2549C9.6195 16.5642 10.1846 15.9991 10.8753 15.9991C11.5661 15.9991 12.1311 16.5642 12.1311 17.2549ZM7.97439 15.6851V21.6628C7.97439 22.3535 7.40933 22.9186 6.71857 22.9186C6.02789 22.9186 5.46276 22.3535 5.46276 21.6628V15.6851C5.46276 14.9944 6.02789 14.4293 6.71857 14.4293C7.40933 14.4293 7.97439 14.9944 7.97439 15.6851Z"
                    fill="#131313"
                  />
                </svg>
              </div>
              <div className="virtualPartnerText">
                <h3>{t("about.tochniTitle")}</h3>
                <p>{t("about.tochniText")}</p>
              </div>
            </div>
            <div className="virtualSection">
              <div className="virtualLogo">
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.1097 5.87109C23.404 6.72066 21.5811 7.31103 19.7012 7.62272C20.0334 9.41818 20.2086 11.2392 20.2246 13.0651H27.4704C27.3921 10.4899 26.5724 7.99201 25.1097 5.87109Z"
                    fill="black"
                  />
                  <path
                    d="M3.38281 21.8367C3.41577 21.8786 3.44739 21.9217 3.4808 21.9632C3.55668 22.0573 3.63454 22.1495 3.71276 22.2413C3.80484 22.3493 3.89779 22.4565 3.99302 22.5613C4.07344 22.6499 4.15541 22.7368 4.23799 22.823C4.3364 22.9258 4.43622 23.027 4.53742 23.1266C4.62177 23.2092 4.70718 23.2906 4.79365 23.3708C4.89806 23.4679 5.00386 23.5632 5.11106 23.6568C5.19972 23.7341 5.28929 23.8103 5.37976 23.8853C5.48899 23.9757 5.59964 24.0642 5.7117 24.1508C5.8046 24.2229 5.898 24.2942 5.99267 24.3638C6.10686 24.4477 6.22271 24.5291 6.33938 24.6094C6.43577 24.6757 6.53239 24.7415 6.63038 24.8053C6.74914 24.8825 6.86971 24.9568 6.99074 25.0303C7.09068 25.0909 7.19058 25.1515 7.29205 25.2095C7.41509 25.28 7.54002 25.3469 7.66516 25.4134C7.76801 25.468 7.87068 25.523 7.97491 25.575C8.10186 25.6384 8.23068 25.6978 8.35958 25.7571C8.46537 25.8057 8.57077 25.8553 8.67783 25.9012C8.80878 25.9575 8.94158 26.0093 9.07427 26.0614C9.18193 26.1036 9.28907 26.1471 9.39783 26.1867C9.53289 26.2357 9.66976 26.2799 9.80642 26.3247C9.91568 26.3605 10.0243 26.3979 10.1346 26.431C10.2735 26.4727 10.4142 26.5089 10.5546 26.5461C10.6647 26.5753 10.7741 26.6066 10.885 26.633C11.0299 26.6675 11.1766 26.6959 11.3228 26.7257C11.3997 26.7413 11.4764 26.7583 11.5536 26.7726C10.2089 25.4945 9.1164 23.176 8.45222 20.2295C6.69409 20.5194 4.98681 21.0607 3.38281 21.8367Z"
                    fill="black"
                  />
                  <path
                    d="M13.9884 27.0003C15.9556 27.0003 17.7154 24.1757 18.6507 20.0871C15.5595 19.6272 12.4173 19.6272 9.32617 20.0871C10.2615 24.1756 12.0213 27.0003 13.9884 27.0003Z"
                    fill="black"
                  />
                  <path
                    d="M2.86652 21.1295C4.57224 20.28 6.39515 19.6896 8.27507 19.3779C7.9428 17.5824 7.76766 15.7614 7.75166 13.9355H0.505859C0.584189 16.5107 1.40386 19.0086 2.86652 21.1295Z"
                    fill="black"
                  />
                  <path
                    d="M0.505859 13.0651H7.75166C7.76766 11.2392 7.9428 9.41821 8.27507 7.62275C6.39515 7.31107 4.57224 6.72068 2.86652 5.87109C1.40386 7.99201 0.584191 10.4899 0.505859 13.0651Z"
                    fill="black"
                  />
                  <path
                    d="M17.0946 26.633C17.2053 26.6066 17.3145 26.5753 17.4244 26.5462C17.565 26.509 17.7058 26.4727 17.8449 26.431C17.9551 26.398 18.0638 26.3605 18.173 26.3247C18.3097 26.2799 18.4465 26.2358 18.5816 26.1867C18.6904 26.1472 18.7975 26.1037 18.9052 26.0614C19.0378 26.0093 19.1706 25.9575 19.3016 25.9012C19.4087 25.8553 19.5141 25.8058 19.6198 25.7571C19.7487 25.6978 19.8776 25.6384 20.0045 25.575C20.1087 25.5231 20.2114 25.4681 20.3143 25.4134C20.4394 25.3469 20.5643 25.28 20.6874 25.2096C20.7888 25.1515 20.8887 25.0909 20.9887 25.0303C21.1097 24.9568 21.2303 24.8825 21.349 24.8053C21.447 24.7415 21.5436 24.6757 21.64 24.6094C21.7568 24.5291 21.8727 24.4477 21.9869 24.3637C22.0814 24.2943 22.1746 24.2231 22.2673 24.1512C22.3795 24.0642 22.4904 23.9755 22.6001 23.885C22.6904 23.8102 22.7798 23.7342 22.8682 23.6569C22.9755 23.5633 23.0813 23.468 23.1858 23.3709C23.2721 23.2906 23.3575 23.2091 23.442 23.1266C23.5434 23.0272 23.6432 22.926 23.7414 22.823C23.824 22.7368 23.906 22.6499 23.9864 22.5614C24.0816 22.4565 24.1746 22.3494 24.2667 22.2413C24.3449 22.1495 24.4227 22.0573 24.4986 21.9632C24.532 21.9218 24.5636 21.8786 24.5966 21.8368C22.9926 21.0607 21.2853 20.5194 19.5272 20.2295C18.863 23.1759 17.7705 25.4946 16.4258 26.7727C16.5029 26.7584 16.5794 26.7414 16.6562 26.7258C16.8026 26.696 16.9494 26.6675 17.0946 26.633Z"
                    fill="black"
                  />
                  <path
                    d="M27.4704 13.9355H20.2246C20.2086 15.7614 20.0334 17.5824 19.7012 19.3779C21.5811 19.6896 23.404 20.2799 25.1097 21.1295C26.5724 19.0086 27.3921 16.5107 27.4704 13.9355Z"
                    fill="black"
                  />
                  <path
                    d="M18.8304 7.7666C17.2277 8.01063 15.6087 8.13176 13.9875 8.12893C12.3664 8.13174 10.7474 8.01062 9.14468 7.7666C8.81535 9.51381 8.64015 11.2866 8.62109 13.0645H19.354C19.3349 11.2866 19.1597 9.51381 18.8304 7.7666Z"
                    fill="black"
                  />
                  <path
                    d="M9.14469 19.2334C12.3552 18.7503 15.6199 18.7503 18.8304 19.2334C19.1597 17.4862 19.3349 15.7134 19.354 13.9355H8.62109C8.64016 15.7134 8.81537 17.4862 9.14469 19.2334Z"
                    fill="black"
                  />
                  <path
                    d="M13.9884 0C12.0213 0 10.2615 2.82464 9.32617 6.91322C10.8694 7.1454 12.4279 7.2607 13.9884 7.25813C15.549 7.26068 17.1075 7.14538 18.6507 6.91322C17.7154 2.82468 15.9556 0 13.9884 0Z"
                    fill="black"
                  />
                  <path
                    d="M24.2667 4.75886C24.1746 4.6508 24.0816 4.54363 23.9864 4.4388C23.906 4.35023 23.824 4.26333 23.7414 4.17715C23.643 4.07437 23.5432 3.97318 23.442 3.87357C23.3577 3.79092 23.2722 3.7095 23.1858 3.62931C23.0813 3.53221 22.9755 3.43685 22.8682 3.34324C22.7797 3.26605 22.6904 3.19003 22.6001 3.11518C22.4906 3.02456 22.3796 2.93583 22.2673 2.84899C22.1746 2.77708 22.0814 2.70588 21.9869 2.63647C21.8727 2.55252 21.7568 2.47104 21.6401 2.3908C21.5437 2.32449 21.447 2.25864 21.3491 2.19489C21.2303 2.11766 21.1097 2.04334 20.9887 1.96988C20.8888 1.90924 20.7888 1.84864 20.6874 1.79062C20.5643 1.7202 20.4394 1.65326 20.3143 1.58677C20.2114 1.53212 20.1088 1.47712 20.0045 1.42513C19.8776 1.3618 19.7488 1.3024 19.6199 1.24307C19.5141 1.19442 19.4087 1.1449 19.3016 1.09894C19.1706 1.0427 19.0379 0.990879 18.9052 0.938783C18.7975 0.896506 18.6904 0.853016 18.5816 0.813503C18.4465 0.76442 18.3097 0.720262 18.173 0.675465C18.0637 0.639668 17.9551 0.60221 17.8449 0.569142C17.7058 0.527463 17.565 0.491206 17.4244 0.453964C17.3145 0.424832 17.2053 0.393542 17.0946 0.367209C16.9494 0.332655 16.8026 0.304162 16.6562 0.274427C16.5794 0.258831 16.5029 0.241823 16.4258 0.227539C17.7705 1.50561 18.863 3.82421 19.5272 6.77067C21.2853 6.48076 22.9926 5.93947 24.5966 5.16343C24.5636 5.12157 24.532 5.07844 24.4986 5.03701C24.4227 4.94286 24.3449 4.85067 24.2667 4.75886Z"
                    fill="black"
                  />
                  <path
                    d="M10.885 0.36718C10.7741 0.393582 10.6647 0.424914 10.5546 0.45408C10.4142 0.491241 10.2735 0.527509 10.1346 0.569153C10.0243 0.602221 9.91565 0.639679 9.80642 0.675476C9.66976 0.720273 9.53289 0.764432 9.39783 0.813514C9.28906 0.853028 9.18193 0.896512 9.07426 0.938795C8.94157 0.990891 8.80878 1.04273 8.67783 1.09895C8.57076 1.14491 8.46536 1.19443 8.35957 1.24309C8.23067 1.30241 8.10185 1.36181 7.9749 1.42514C7.87068 1.47713 7.76801 1.53214 7.66516 1.58678C7.54001 1.65327 7.41509 1.72022 7.29204 1.79063C7.19058 1.84865 7.09067 1.90925 6.99073 1.96989C6.8697 2.04336 6.74913 2.11768 6.63037 2.1949C6.53238 2.25865 6.43577 2.32451 6.33937 2.39081C6.2227 2.47104 6.10685 2.55245 5.99266 2.63637C5.89802 2.70598 5.80458 2.77729 5.71169 2.84937C5.59982 2.93616 5.48917 3.02465 5.37976 3.11485C5.28921 3.18977 5.19964 3.26595 5.11105 3.3434C5.00382 3.43693 4.89802 3.53224 4.79365 3.62933C4.70728 3.70964 4.62187 3.79106 4.53742 3.87358C4.436 3.97295 4.33619 4.07415 4.23798 4.17716C4.15541 4.26336 4.07343 4.35026 3.99302 4.43882C3.8978 4.54365 3.80484 4.65082 3.71276 4.75888C3.63455 4.8507 3.55668 4.94288 3.4808 5.03701C3.44738 5.07844 3.41577 5.12157 3.38281 5.16342C4.9868 5.93949 6.69408 6.48079 8.4522 6.7707C9.11638 3.82425 10.2089 1.50561 11.5536 0.227539C11.4763 0.241858 11.3997 0.258831 11.3228 0.274497C11.1765 0.304238 11.0299 0.332648 10.885 0.36718Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="virtualPartnerText">
                <h3>{t("about.oxvachen")}</h3>
                <p>{t("about.oxvachenText")}</p>
              </div>
            </div>
          </div>

          <Faq />
        </div>

        <ContactUs />
      </div>
    </>
  );
};

export default Contact;
