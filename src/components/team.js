import React, { Component } from "react";
import "../style/team.css";
import member1 from "../assets/member1.jpg";
import member2 from "../assets/member2.jpg";
import member3 from "../assets/member3.jpg";
export class team extends Component {
  constructor(props) {
    super(props);

    this.container = React.createRef();
    this.slide = React.createRef();
    this.slider = React.createRef();
    this.state = {
      scroll: 0,
      animatedScroll: true,
      social: [
        {
          svg: (
            <svg
              fill="currentColor"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path
                d="M288,192v-38.1c0-17.2,3.8-25.9,30.5-25.9H352V64h-55.9c-68.5,0-91.1,31.4-91.1,85.3V192h-45v64h45v192h83V256h56.4l7.6-64
                H288z"
              ></path>
            </svg>
          ),
          link: "https://naveenkashyap.com",
          id:
            Math.random()
              .toString(36)
              .substring(2, 15) +
            Math.random()
              .toString(36)
              .substring(2, 15)
        },
        {
          svg: (
            <svg
              fill="currentColor"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M256,64C150,64,64,150,64,256c0,106.1,86,192,192,192s192-85.9,192-192C448,150,362,64,256,64z M256,415.5
                c-88.1,0-159.5-71.4-159.5-159.5c0-88.1,71.4-159.5,159.5-159.5c88.1,0,159.5,71.4,159.5,159.5C415.5,344.1,344.1,415.5,256,415.5
                z"
                    >
                      <path
                        d="M256,64C150,64,64,150,64,256c0,106.1,86,192,192,192s192-85.9,192-192C448,150,362,64,256,64z M256,415.5
                c-88.1,0-159.5-71.4-159.5-159.5c0-88.1,71.4-159.5,159.5-159.5c88.1,0,159.5,71.4,159.5,159.5C415.5,344.1,344.1,415.5,256,415.5
                z"
                      ></path>
                    </path>
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M306.3,246.7c23.4-2.2,50.9-2.9,77.2-2.4c-2.3-25.4-12-48.7-27-67.6c-16.5,14.9-38,28.1-63.3,39
                C297.8,225.7,302.1,236.1,306.3,246.7z"
                    >
                      <path
                        d="M306.3,246.7c23.4-2.2,50.9-2.9,77.2-2.4c-2.3-25.4-12-48.7-27-67.6c-16.5,14.9-38,28.1-63.3,39
                C297.8,225.7,302.1,236.1,306.3,246.7z"
                      ></path>
                    </path>
                    <path
                      d="M335.4,155.6C313.6,138.3,286,128,256,128c-5.1,0-10.2,0.3-15.2,0.9c13.8,17.7,26.7,37.6,38.6,59.5
                C301.1,179.2,320,168.1,335.4,155.6z"
                    >
                      <path
                        d="M335.4,155.6C313.6,138.3,286,128,256,128c-5.1,0-10.2,0.3-15.2,0.9c13.8,17.7,26.7,37.6,38.6,59.5
                C301.1,179.2,320,168.1,335.4,155.6z"
                      ></path>
                    </path>
                    <path d="M205.9,138.2c-34.1,14.5-60.7,43.4-72,79.1c41.1-0.7,79.6-7,113.4-17.3C234.7,177,220.7,156.3,205.9,138.2z">
                      <path d="M205.9,138.2c-34.1,14.5-60.7,43.4-72,79.1c41.1-0.7,79.6-7,113.4-17.3C234.7,177,220.7,156.3,205.9,138.2z"></path>
                    </path>
                    <path
                      d="M383,272.2c-22.3-0.6-46-0.2-66.9,1.5c4.1,12.3,8.1,24.9,11.5,37.9c3.8,14.6,7,29.1,9.6,43.4
                C361.8,334.7,378.8,305.4,383,272.2z"
                    >
                      <path
                        d="M383,272.2c-22.3-0.6-46-0.2-66.9,1.5c4.1,12.3,8.1,24.9,11.5,37.9c3.8,14.6,7,29.1,9.6,43.4
                C361.8,334.7,378.8,305.4,383,272.2z"
                      ></path>
                    </path>
                    <path
                      d="M258,256.1c3.9-1.6,8.8-3,14.3-4.3c-3.4-8.3-7.1-16.4-10.8-24.3c-39.1,12.6-84.6,20.3-133.3,21.3
                c-0.1,2.4-0.2,4.8-0.2,7.3c0,29.1,9.7,55.9,26,77.4C178.9,301,214.9,274.2,258,256.1z"
                    >
                      <path
                        d="M258,256.1c3.9-1.6,8.8-3,14.3-4.3c-3.4-8.3-7.1-16.4-10.8-24.3c-39.1,12.6-84.6,20.3-133.3,21.3
                c-0.1,2.4-0.2,4.8-0.2,7.3c0,29.1,9.7,55.9,26,77.4C178.9,301,214.9,274.2,258,256.1z"
                      ></path>
                    </path>
                    <path
                      d="M282.6,278.2c-6.9,1.5-12.9,3.2-17.4,5.3c-37.1,16.8-68.3,41.6-90.4,71.5c22.1,18.2,50.4,29,81.2,29
                c18.5,0,36-3.9,51.8-10.9c-2.7-15.1-6-30.3-10-45.7C293.4,310.5,288.2,294,282.6,278.2z"
                    >
                      <path
                        d="M282.6,278.2c-6.9,1.5-12.9,3.2-17.4,5.3c-37.1,16.8-68.3,41.6-90.4,71.5c22.1,18.2,50.4,29,81.2,29
                c18.5,0,36-3.9,51.8-10.9c-2.7-15.1-6-30.3-10-45.7C293.4,310.5,288.2,294,282.6,278.2z"
                      ></path>
                    </path>
                  </g>
                </g>
              </g>
            </svg>
          ),
          link: "https://naveenkashyap.com",
          id:
            Math.random()
              .toString(36)
              .substring(2, 15) +
            Math.random()
              .toString(36)
              .substring(2, 15)
        },

        {
          svg: (
            <svg
              fill="currentColor"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <g>
                <path
                  d="M242.1,275.6l-18.2-13.7l-0.1-0.1c-5.8-4.6-10-8.3-10-14.7c0-7,5-11.8,10.9-17.4l0.5-0.4c20-15.2,44.7-34.3,44.7-74.6
                    c0-26.9-11.9-44.7-23.3-57.7h13L320,64H186.5c-25.3,0-62.7,3.2-94.6,28.6l-0.1,0.3C70,110.9,57,137.4,57,163.5
                    c0,21.2,8.7,42.2,23.9,57.4c21.4,21.6,48.3,26.1,67.1,26.1c1.5,0,3,0,4.5-0.1c-0.8,3-1.2,6.3-1.2,10.3c0,10.9,3.6,19.3,8.1,26.2
                    c-24,1.9-58.1,6.5-84.9,22.3C35.1,328.4,32,361.7,32,371.3c0,38.2,35.7,76.8,115.5,76.8c91.6,0,139.5-49.8,139.5-99
                    C287,312,264.2,293.5,242.1,275.6z M116.7,139.9c0-13.4,3-23.5,9.3-30.9c6.5-7.9,18.2-13.1,29-13.1c19.9,0,32.9,15,40.4,27.6
                    c9.2,15.5,14.9,36.1,14.9,53.6c0,4.9,0,20-10.2,29.8c-7,6.7-18.7,11.4-28.6,11.4c-20.5,0-33.5-14.7-40.7-27
                    C120.4,173.5,116.7,153.1,116.7,139.9z M237.8,368c0,27.4-25.2,44.5-65.8,44.5c-48.1,0-80.3-20.6-80.3-51.3
                    c0-26.1,21.5-36.8,37.8-42.5c18.9-6.1,44.3-7.3,50.1-7.3c3.9,0,6.1,0,8.7,0.2C224.9,336.8,237.8,347.7,237.8,368z"
                >
                  <path
                    d="M242.1,275.6l-18.2-13.7l-0.1-0.1c-5.8-4.6-10-8.3-10-14.7c0-7,5-11.8,10.9-17.4l0.5-0.4c20-15.2,44.7-34.3,44.7-74.6
                    c0-26.9-11.9-44.7-23.3-57.7h13L320,64H186.5c-25.3,0-62.7,3.2-94.6,28.6l-0.1,0.3C70,110.9,57,137.4,57,163.5
                    c0,21.2,8.7,42.2,23.9,57.4c21.4,21.6,48.3,26.1,67.1,26.1c1.5,0,3,0,4.5-0.1c-0.8,3-1.2,6.3-1.2,10.3c0,10.9,3.6,19.3,8.1,26.2
                    c-24,1.9-58.1,6.5-84.9,22.3C35.1,328.4,32,361.7,32,371.3c0,38.2,35.7,76.8,115.5,76.8c91.6,0,139.5-49.8,139.5-99
                    C287,312,264.2,293.5,242.1,275.6z M116.7,139.9c0-13.4,3-23.5,9.3-30.9c6.5-7.9,18.2-13.1,29-13.1c19.9,0,32.9,15,40.4,27.6
                    c9.2,15.5,14.9,36.1,14.9,53.6c0,4.9,0,20-10.2,29.8c-7,6.7-18.7,11.4-28.6,11.4c-20.5,0-33.5-14.7-40.7-27
                    C120.4,173.5,116.7,153.1,116.7,139.9z M237.8,368c0,27.4-25.2,44.5-65.8,44.5c-48.1,0-80.3-20.6-80.3-51.3
                    c0-26.1,21.5-36.8,37.8-42.5c18.9-6.1,44.3-7.3,50.1-7.3c3.9,0,6.1,0,8.7,0.2C224.9,336.8,237.8,347.7,237.8,368z"
                  ></path>
                </path>
                <polygon points="402,142 402,64 368,64 368,142 288,142 288,176 368,176 368,257 402,257 402,176 480,176 480,142 	">
                  <polygon points="402,142 402,64 368,64 368,142 288,142 288,176 368,176 368,257 402,257 402,176 480,176 480,142 	"></polygon>
                </polygon>
              </g>
            </svg>
          ),
          link: "https://naveenkashyap.com",
          id:
            Math.random()
              .toString(36)
              .substring(2, 15) +
            Math.random()
              .toString(36)
              .substring(2, 15)
        },
        {
          svg: (
            <svg
              fill="currentColor"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path
                d="M436.9,296.8c2.8-12.5,4.2-25.4,4.2-38.7c0-99.7-82-180.6-183.2-180.6c-10.7,0-21.1,0.9-31.3,2.6
                    C210.3,69.9,191,64,170.2,64C111.6,64,64,110.9,64,168.7c0,19.4,5.3,37.5,14.6,53c-2.4,11.7-3.7,23.9-3.7,36.3
                    c0,99.8,82,180.6,183.1,180.6c11.5,0,22.7-1,33.5-3c15,7.9,32.1,12.4,50.2,12.4c58.7,0,106.2-46.9,106.2-104.7
                    C448,326.6,444,310.8,436.9,296.8z M351.9,344.3c-8.5,11.8-21,21.2-37.2,27.8c-16.1,6.6-35.3,9.9-57.3,9.9
                    c-26.3,0-48.3-4.6-65.6-13.6c-12.3-6.6-22.4-15.4-30.2-26.4c-7.8-11-11.7-22-11.7-32.6c0-6.6,2.6-12.3,7.6-17.1c5-4.6,11.5-7,19.1-7
                    c6.3,0,11.7,1.8,16.1,5.5c4.2,3.5,7.8,8.7,10.7,15.5c3.3,7.3,6.8,13.5,10.6,18.4c3.6,4.7,8.7,8.6,15.3,11.7
                    c6.7,3.1,15.6,4.7,26.6,4.7c15.1,0,27.5-3.2,36.8-9.5c9.2-6.1,13.6-13.5,13.6-22.5c0-7.1-2.3-12.7-7.1-17.1
                    c-5-4.6-11.5-8.2-19.6-10.6c-8.3-2.6-19.6-5.3-33.6-8.2c-19-4-35.1-8.8-48-14.2c-13.1-5.5-23.7-13.2-31.5-22.7
                    c-7.9-9.7-11.8-21.9-11.8-36.2c0-13.7,4.2-25.9,12.4-36.5c8.2-10.5,20.1-18.7,35.6-24.3c15.2-5.6,33.3-8.4,53.7-8.4
                    c16.4,0,30.7,1.9,42.7,5.5c12.1,3.7,22.2,8.7,30.3,14.9c8,6.2,14,12.8,17.8,19.7c3.8,7,5.7,13.9,5.7,20.6c0,6.4-2.5,12.3-7.5,17.4
                    c-5,5.1-11.3,7.8-18.8,7.8c-6.8,0-12.1-1.6-15.8-4.8c-3.4-3-7-7.6-10.9-14.3c-4.6-8.5-10.1-15.3-16.4-20.1c-6.2-4.6-16.4-7-30.6-7
                    c-13.1,0-23.8,2.6-31.7,7.7c-7.6,4.9-11.3,10.6-11.3,17.3c0,4.1,1.2,7.5,3.7,10.5c2.6,3.1,6.2,5.9,10.9,8.2
                    c4.8,2.4,9.8,4.3,14.7,5.6c5.1,1.4,13.6,3.5,25.3,6.1c14.9,3.1,28.5,6.7,40.5,10.4c12.2,3.9,22.7,8.6,31.3,14.1
                    c8.8,5.6,15.7,12.9,20.7,21.5c4.9,8.6,7.4,19.4,7.4,31.8C364.8,318.9,360.5,332.5,351.9,344.3z"
              ></path>
            </svg>
          ),
          link: "https://naveenkashyap.com",
          id:
            Math.random()
              .toString(36)
              .substring(2, 15) +
            Math.random()
              .toString(36)
              .substring(2, 15)
        },
        {
          svg: (
            <svg
              fill="currentColor"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path
                d="M492,109.5c-17.4,7.7-36,12.9-55.6,15.3c20-12,35.4-31,42.6-53.6c-18.7,11.1-39.4,19.2-61.5,23.5
                C399.8,75.8,374.6,64,346.8,64c-53.5,0-96.8,43.4-96.8,96.9c0,7.6,0.8,15,2.5,22.1c-80.5-4-151.9-42.6-199.6-101.3
                c-8.3,14.3-13.1,31-13.1,48.7c0,33.6,17.2,63.3,43.2,80.7C67,210.7,52,206.3,39,199c0,0.4,0,0.8,0,1.2c0,47,33.4,86.1,77.7,95
                c-8.1,2.2-16.7,3.4-25.5,3.4c-6.2,0-12.3-0.6-18.2-1.8c12.3,38.5,48.1,66.5,90.5,67.3c-33.1,26-74.9,41.5-120.3,41.5
                c-7.8,0-15.5-0.5-23.1-1.4C62.8,432,113.7,448,168.3,448C346.6,448,444,300.3,444,172.2c0-4.2-0.1-8.4-0.3-12.5
                C462.6,146,479,129,492,109.5z"
              ></path>
            </svg>
          ),
          link: "https://naveenkashyap.com",
          id:
            Math.random()
              .toString(36)
              .substring(2, 15) +
            Math.random()
              .toString(36)
              .substring(2, 15)
        }
      ],
      team: [
        {
          memberImg: member1,
          memberName: "John Doe",
          memberRole: "Project Manager",
          id:
            Math.random()
              .toString(36)
              .substring(2, 15) +
            Math.random()
              .toString(36)
              .substring(2, 15)
        },
        {
          memberImg: member2,
          memberName: "Jenny Doe",
          memberRole: "Product Designer",
          id:
            Math.random()
              .toString(36)
              .substring(2, 15) +
            Math.random()
              .toString(36)
              .substring(2, 15)
        },
        {
          memberImg: member3,
          memberName: "Naina Doe",
          memberRole: "Data Analyst",
          id:
            Math.random()
              .toString(36)
              .substring(2, 15) +
            Math.random()
              .toString(36)
              .substring(2, 15)
        },
        {
          memberImg: member1,
          memberName: "John Doe",
          memberRole: "Project Manager",
          id:
            Math.random()
              .toString(36)
              .substring(2, 15) +
            Math.random()
              .toString(36)
              .substring(2, 15)
        },
        {
          memberImg: member2,
          memberName: "Jenny Doe",
          memberRole: "Product Designer",
          id:
            Math.random()
              .toString(36)
              .substring(2, 15) +
            Math.random()
              .toString(36)
              .substring(2, 15)
        },
        {
          memberImg: member3,
          memberName: "Naina Doe",
          memberRole: "Data Analyst",
          id:
            Math.random()
              .toString(36)
              .substring(2, 15) +
            Math.random()
              .toString(36)
              .substring(2, 15)
        }
      ]
    };
    this.s = this.state.scroll;
    this.marginPlusWidth = 0;
  }
  back = () => {
      var copyArrayPop = [...this.state.team];
      copyArrayPop.pop();
      var finalArrayPop = [this.state.team[5], ...copyArrayPop]
      this.setState(
        {
          team: finalArrayPop,
          scroll: -this.state.width,
          animatedScroll:false
        },
        () => {
            setTimeout(() => {
                   var newAnimatedScroll = this.state.width
                   console.log(newAnimatedScroll);
                   
            this.setState({ 
                scroll: 0,
                animatedScroll:true 
              });
            }, 200);
        }
      );
  };
  next = () => {
      console.log( this.marginPlusWidth);
      this.marginPlusWidth = 25*2;
      console.log( this.marginPlusWidth );
      
    var CopyArray = [...this.state.team];
    CopyArray.shift(); //removes first item
    var finalArray = [...CopyArray, this.state.team[0]];
    // var Slidemargin = this.slide.current.style.marginLeft + this.slide.current.style.marginRight;
  
    var finalScrollValue = this.state.width
    console.log(finalScrollValue);
    
    this.setState(
      {
        team: finalArray,
        scroll: 0,
        animatedScroll:false
      },
      () => {
          setTimeout(() => {
                 var newAnimatedScroll = this.state.width
                 console.log(newAnimatedScroll);
                 
          this.setState({ 
              scroll: -newAnimatedScroll,
              animatedScroll:true 
            });
          }, 200);
      }
    );
  };
  animateContainerListener = e => {
    this.container.current.removeEventListener(
      "transitionend",
      this.animateContainerListener
    );
    console.log("transitionend", e.propertyName);
    console.log(e);
    if (e.propertyName === "transform") {
      console.log("adding to state");
      this.setState(
        {
          scroll: -this.state.width + 25 * 2
        },
        () => {
          this.container.current.style.transition = "none";
          // this.container.current.style.transform = 'translate(0)';
          setTimeout(() => {
            this.container.current.style.transition = "all 0.5s";
          });
        }
      );
    }
  };
  setLi = () => {
    return {
        width: this.state.width
    };
  };
  moveT = () => {
  if (this.state.animatedScroll) {
    return {
      transition: "all 0.5s",
      transform: `translatex(${this.state.scroll}px)`,
      
      height: "100%"
    };
  } else {
    return {
      transition: "none",
      transform: `translatex(${this.state.scroll}px)`,
      height: "100%"
    };
  }
};

  componentDidMount() {
    console.log("componentDidMount");
    window.addEventListener("scroll", () => {
      var container = document.querySelector(".team");
      var head = document.querySelector(".team-head");
      var content = document.querySelector(".team-slider-container");
      var glides = document.querySelector(".team-glide");
      var containerOffsetTop = container.offsetTop;
      var clientHeight = container.clientHeight;
      var halfClientHeight = clientHeight / 1.5;
      var res = containerOffsetTop - halfClientHeight;
      if (window.pageYOffset >= res) {
        head.classList.add("animated", "fadeInUp", "show");
        glides.classList.add("animated", "fadeInUp", "show");
        content.classList.add("animated", "fadeInUp", "show");
        content.classList.remove("hide");
        head.classList.remove("hide");
        glides.classList.remove("hide");
      }
    });

    window.addEventListener("resize", () => {
      console.log("window resize");

      var slideeWidth = this.slider.current.clientWidth;
      if (window.innerWidth < 480) {
        slideeWidth = this.slider.current.clientWidth / 1;
        // return
      } else if (window.innerWidth < 768) {
        slideeWidth = this.slider.current.clientWidth / 2;
        console.log(slideeWidth);
        // return
      } else {
        slideeWidth = this.slider.current.clientWidth / 3;
      }
      console.log({ width: this.state.width });
      this.setState({ width: slideeWidth ,scroll:-(slideeWidth)});
      if (window.innerWidth<1200) {
          this.marginPlusWidth = this.state.width + 15*2;
      }
      if (window.innerWidth>1200) {
          
      this.marginPlusWidth = this.state.width + 25*2;
      }
    });

    var slideeWidth = this.slider.current.clientWidth;
    if (window.innerWidth < 480) {
      slideeWidth = this.slider.current.clientWidth / 1;
      // return
    } else if (window.innerWidth < 768) {
      slideeWidth = this.slider.current.clientWidth / 2;
      console.log(slideeWidth);
      
      // return
    } else {
      slideeWidth = this.slider.current.clientWidth / 3;
    } 
    // if (window.innerWidth<1200) {
    //     this.marginPlusWidth = this.state.width + 15*2;
    // }
    // if (window.innerWidth>1200) {
    //     this.marginPlusWidth = this.state.width + 25*2;
    // }

    // this.setState({width:slideeWidth})
    this.setState({ width: slideeWidth }, () => {
      this.setState({ scroll: -(this.state.width) });
      console.log(this.state.scroll);
      
      console.log({ width: this.state.width });
      this.setLi();
      // this.moveT(precentage);
      //         var precentage = Math.floor(((this.state.width/slideeWidth)*100)*2)
      // console.log(precentage);
    });
  }
  render() {
 
    return (
      <div className="team">
        <div className="team-wrapper">
          <div className="team-container">
            <div className="team-head hide">
              <h5>OUR TEAM MEMBER</h5>
              <h2>Meet Our Perfectionist</h2>
            </div>
            <div ref={this.slider} className="team-slider-container hide">
              <ul
                ref={this.container}
                style={this.moveT()}
                className="team-slider"
              >
                {this.state.team.map(t => (
                  <li
                    ref={this.slide}
                    key={t.id}
                    style={this.setLi()}
                    className="team-slide"
                  >
                    <div className="team-img">
                      <img src={t.memberImg} alt="" />
                      <div className="team-info">
                        <h3>{t.memberName}</h3>
                        <p>{t.memberRole}</p>
                      </div>
                    </div>
                    <div className="team-social">
                      <ul>
                        {this.state.social.map(icon => (
                          <li key={icon.id}>
                            <a href={icon.link}>
                              <i>{icon.svg}</i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="slide-glider team-glide hide">
              <div onClick={this.back} className="glide-prev">
                {" "}
                <div className="glide-prev-left">
                  <div className="glide-prev-top"></div>{" "}
                  <div className="glide-prev-bottom"></div>{" "}
                </div>
              </div>

              <div onClick={this.next} className="glide-next">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default team;
