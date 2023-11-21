import React from 'react';

interface Props {
  fillMain: string;
  fillSecondary: string;
}

const Logo = ({ fillMain, fillSecondary }: Props): JSX.Element => (
  <svg viewBox="0 0 335 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.1841 2.6134L23.025 25.3082L8.004 3.36819L2.10974 6.82995V45.9996H9.31384L8.96767 17.2805L25.7429 45.9996H33.6207L28.5123 2.6134H23.1841Z" fill={fillMain}/>
    <path d="M44.4502 11.0189L34.4814 2.61377L36.0299 13.423L44.4502 11.0189Z" fill={fillMain}/>
    <path d="M36.3339 16.172L40.0809 46H50.7374L45.0349 13.6653L36.3339 16.172Z" fill={fillMain}/>
    <path d="M61.8898 36.6444L61.8524 13.6234L74.656 8.24205L66.1421 3.07037L50.9948 12.1138L56.8188 46H75.6477L75.8208 33.546L61.8898 36.6444Z" fill={fillMain}/>
    <path d="M95.576 3.07037L90.4115 13.6653V2.61377H80.7561L80.3772 46H89.794L87.4784 28.4256L96.1373 46H106.911L92.2499 22.4898L100.769 12.4167L95.576 3.07037Z" fill={fillMain}/>
    <path d="M114.564 46H125.997L133.056 33.7417L142.477 37.0264V45.9953H149.738V2.61377L140.882 5.74939L114.569 46H114.564ZM142.477 28.4256H136.115L142.477 17.3787V28.4256Z" fill={fillSecondary}/>
    <path d="M155.501 46H179.99V24.3069H167.013L179.99 18.2826V2.61377H155.501V46ZM162.686 7.78545H173.731V14.094L162.686 18.5575V7.78545ZM173.577 30.7598V41.229H162.841L161.657 28.9474L173.577 30.7598Z" fill={fillSecondary}/>
    <path d="M210.729 8.30732L185.8 2.61847V46.0047H193.369V34.2309L201.018 46.0047H215L194.913 24.8148L210.729 8.30732ZM190.202 20.1416V8.69403L200.4 10.9351L190.202 20.1416Z" fill={fillSecondary}/>
    <path d="M203.296 25.304L208.956 31.0208L212.427 26.6505L222.144 38.5779L222.653 45.9953H231.537L225.587 2.60913L203.291 25.2993L203.296 25.304ZM215.225 23.3331L220.647 16.9035L221.54 29.8466L215.225 23.3331Z" fill={fillSecondary}/>
    <path d="M249.973 16.377L239.218 2.61377H231.336L237.31 46H245.852L242.245 21.0967L250.899 33.6485L258.211 22.4991V46H266.397V9.8448L259.081 2.61377L249.973 16.377Z" fill={fillSecondary}/>
    <path d="M291.658 2.61377L272.053 9.58855V46H298.105L300.467 2.61377H291.658ZM291.228 38.7689H280.857V13.7865L291.654 9.84946L291.223 38.7736L291.228 38.7689Z" fill={fillSecondary}/>
    <path d="M326.271 2.61377L313.472 28.7284L315.942 2.61377H306.572L303.583 46H313.986L335 2.61377H326.271Z" fill={fillSecondary}/>
    <path d="M21.0697 0V22.3174L6.55854 0L0 4.21189V43.3862H7.19942L6.85793 14.6624L23.6285 43.3862H31.5109L26.4026 0H21.0697Z" fill={fillSecondary}/>
    <path d="M42.3405 8.40515L32.3717 0L33.9154 10.8093L42.3405 8.40515Z" fill={fillSecondary}/>
    <path d="M34.2241 13.5582L37.9665 43.3862H48.6276L42.9205 11.0516L34.2241 13.5582Z" fill={fillSecondary}/>
    <path d="M59.7754 34.0306L59.7379 11.0096L72.5463 5.62828L64.0323 0.456604L48.885 9.4954L54.7044 43.3862H73.538L73.7111 30.9276L59.7754 34.0306Z" fill={fillSecondary}/>
    <path d="M93.8544 0L88.3016 11.0516V0H78.6462L78.2673 43.3862H87.6841L85.3638 25.8118L94.0275 43.3862H105.306L90.4628 19.6337L99.075 9.30902L93.8544 0Z" fill={fillSecondary}/>
    <path d="M112.454 43.3862H123.887L130.946 31.1279L140.368 34.4126V43.3815H147.628V0L138.772 3.13562L112.459 43.3862H112.454ZM140.368 25.8118H134.006L140.368 14.7649V25.8118Z" fill={fillMain}/>
    <path d="M153.391 43.3862H177.88V21.6931H164.904L177.88 15.6688V0H153.391V43.3862ZM160.577 5.17168H171.621V11.4802L160.577 15.9437V5.17168ZM171.467 28.1461V38.6152H160.731L159.547 26.3336L171.467 28.1461Z" fill={fillMain}/>
    <path d="M208.615 5.68885L183.686 0V43.3862H191.255V31.6125L198.903 43.3862H212.886L192.799 22.1963L208.615 5.68885ZM188.088 17.5231V6.08022L198.286 8.32128L188.088 17.5278V17.5231Z" fill={fillMain}/>
    <path d="M200.966 22.9138L206.603 28.7098L210.313 24.0413L220.029 35.9688L220.539 43.3862H229.422L223.481 0L200.966 22.9138ZM213.115 20.724L218.537 14.2943L219.43 27.2375L213.115 20.724Z" fill={fillMain}/>
    <path d="M247.859 13.7585L237.108 0H229.226L235.2 43.3862H243.737L240.135 18.4783L248.785 31.0347L256.101 19.8853V43.3862H264.283V7.23103L256.971 0L247.859 13.7585Z" fill={fillMain}/>
    <path d="M289.544 0L269.938 6.97478V43.3862H295.99L298.353 0H289.544ZM289.114 36.1552H278.742V11.168L289.539 7.23103L289.109 36.1552H289.114Z" fill={fillMain}/>
    <path d="M324.156 0L311.362 26.11L313.832 0H304.457L301.473 43.3862H311.877L332.886 0H324.156Z" fill={fillMain}/>
  </svg>
);

export default Logo;