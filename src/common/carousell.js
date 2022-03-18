import React, { useState, useEffect, useRef } from 'react';



const Carousell = (props) => {
    // const pic = props.PICDATA;
    const pic =
        [{ id: 1, title: 'pic1', link: 'img/banner1.jpg' },
        { id: 2, title: 'pic2', link: 'img/banner2.jpg' },
        { id: 3, title: 'pic3', link: 'img/banner3.jpg' },
        { id: 4, title: 'pic4', link: 'img/banner4.jpg' },
        { id: 5, title: 'pic5', link: 'img/banner5.jpg' },
        ];

    const [navLSwitch, setLNav] = useState(false);
    const [navRSwitch, setRNav] = useState(false);

    const leftArrow = useRef();
    const rightArrow = useRef();
    const picLength = pic.length;
    const [switchCarousell, setCarousell] = useState(0);
    useEffect(() => {
        leftArrow.current.style.transform = "rotate(-45deg)";
        rightArrow.current.style.transform = "rotate(45deg)";
    }, []);

    useEffect(() => {
        let loop = setInterval(() => {
            if (-(switchCarousell / 100) + 1 >= picLength) {
                setCarousell(0);
            } else {
                setCarousell(switchCarousell - 100);
            }
        }, 3000);
        return () => { clearInterval(loop); }
    }, [switchCarousell]);

    const handleLeft = () => {
        if (switchCarousell >= 0) {
            setCarousell(-(picLength - 1) * 100);
        } else {
            setCarousell(c => c + 100);
        }
    };

    const handleRight = () => {
        if (switchCarousell <= `-${picLength - 1}00`) {
            setCarousell(0);
        } else {
            setCarousell(c => c - 100);
        }
    };

    const handleLMouseenter = () => {
        setLNav(true);
    }
    const handleLMouseleave = () => {
        setLNav(false);
    }
    const navLClass = navLSwitch ? style.leftNavHover : style.leftNav;
    const handleRMouseenter = () => {
        setRNav(true);
    }
    const handleRMouseleave = () => {
        setRNav(false);
    }
    const handleDotnav = (picId) => {
        setCarousell(-(picId - 1) * 100);
    }
    const navRClass = navRSwitch ? style.rightNavHover : style.rightNav;

    const dotdisplay = props.dotDisplay || 'block';

    return (
        <div style={style.container}>
            <div style={style.wrap}>
                <div style={style.carousellWrap}>
                    <ul style={{
                        flex: 1,
                        display: 'flex',
                        width: `${picLength}00%`,
                        position: 'absolute',
                        left: `${switchCarousell}%`,
                        transition: '0.3s all ease-in-out'
                    }}>
                        {
                            pic.map(picData => (
                                <li style={style.carousellLi} key={picData.id}>
                                    <img style={style.pic} src={picData.link} alt={picData.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div style={navLClass} onMouseLeave={() => { handleLMouseleave() }} onMouseEnter={() => { handleLMouseenter() }} onClick={() => { handleLeft() }}>
                    <div style={style.arrowLeft} ref={leftArrow}></div>
                </div>
                <div style={navRClass} onMouseLeave={() => { handleRMouseleave() }} onMouseEnter={() => { handleRMouseenter() }} onClick={() => { handleRight() }}>
                    <div style={style.arrowRight} ref={rightArrow}></div>
                </div>
                <div style={{
                    position: 'absolute',
                    width: '160px',
                    height: '30px',
                    left: '0',
                    right: '0',
                    top: '90%',
                    bottom: '0',
                    margin: '0 auto',
                    display: dotdisplay,
                }}>
                    <ul style={style.dotUl}>
                        {
                            pic.map(picData => (
                                picData.id === -(switchCarousell / 100) + 1 ?
                                    <li key={picData.id} style={style.dotLiActive} onClick={() => { handleDotnav(picData.id) }}></li>
                                    :
                                    <li key={picData.id} style={style.dotLiInActive} onClick={() => { handleDotnav(picData.id) }}></li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}









// const Carousell = (props) => {
//     // const pic = props.PICDATA;
//     const pic =
//         [{ id: 1, title: 'pic1', link: 'img/banner1.jpg' },
//         { id: 2, title: 'pic2', link: 'img/banner2.jpg' },
//         { id: 3, title: 'pic3', link: 'img/banner3.jpg' },
//         { id: 4, title: 'pic4', link: 'img/banner4.jpg' },
//         { id: 5, title: 'pic5', link: 'img/banner5.jpg' },
//         ];
//     const [picSwitch, setPic] = useState(pic);

//     const [navLSwitch, setLNav] = useState(false);
//     const [navRSwitch, setRNav] = useState(false);

//     const leftArrow = useRef();
//     const rightArrow = useRef();
//     const picLength = picSwitch.length;
//     const [switchCarousell, setCarousell] = useState(0);
//     useEffect(() => {
//         leftArrow.current.style.transform = "rotate(-45deg)";
//         rightArrow.current.style.transform = "rotate(45deg)";
//     }, []);


//     const handleLeft = () => {
//         if (switchCarousell >= 0) {
//             setCarousell(-(picLength - 1) * 100);
//         } else {
//             setCarousell(c => c + 100);
//         }
//     };
//     let newArr = [...picSwitch];


//     const [payload, setPayload] = useState(0);
//     console.log(picSwitch);
//     const handleRight = () => {
//         setCarousell(c => c - 100);

//         setPayload(c => c + 1)
//         // let newpic = newArr.shift(picSwitch);
//         let filanPic = newArr.push(picSwitch[payload]);
//         setPic(newArr);


//     };


//     const handleLMouseenter = () => {
//         setLNav(true);
//     }
//     const handleLMouseleave = () => {
//         setLNav(false);
//     }
//     const navLClass = navLSwitch ? style.leftNavHover : style.leftNav;
//     const handleRMouseenter = () => {
//         setRNav(true);
//     }
//     const handleRMouseleave = () => {
//         setRNav(false);
//     }
//     const handleDotnav = (picId) => {
//         setCarousell(-(picId - 1) * 100);
//     }
//     const navRClass = navRSwitch ? style.rightNavHover : style.rightNav;

//     const dotdisplay = props.dotDisplay || 'block';

//     console.log(switchCarousell)
//     return (
//         <div style={style.container}>
//             <div style={style.wrap}>
//                 <div style={style.carousellWrap}>
//                     <ul style={{
//                         flex: 1,
//                         display: 'flex',
//                         width: `${picLength}00%`,
//                         position: 'absolute',
//                         left: `${switchCarousell}%`,
//                         transition: '0.3s all ease-in-out'
//                     }}>
//                         {
//                             picSwitch.map(picData => (
//                                 <li style={style.carousellLi} key={picData.id}>
//                                     <img style={style.pic} src={picData.link} alt={picData.title} />
//                                 </li>
//                             ))
//                         }
//                     </ul>
//                 </div>
//                 <div style={navLClass} onMouseLeave={() => { handleLMouseleave() }} onMouseEnter={() => { handleLMouseenter() }} onClick={() => { handleLeft() }}>
//                     <div style={style.arrowLeft} ref={leftArrow}></div>
//                 </div>
//                 <div style={navRClass} onMouseLeave={() => { handleRMouseleave() }} onMouseEnter={() => { handleRMouseenter() }} onClick={() => { handleRight() }}>
//                     <div style={style.arrowRight} ref={rightArrow}></div>
//                 </div>
//                 <div style={{
//                     position: 'absolute',
//                     width: '160px',
//                     height: '30px',
//                     left: '0',
//                     right: '0',
//                     top: '90%',
//                     bottom: '0',
//                     margin: '0 auto',
//                     display: dotdisplay,
//                 }}>
//                     <ul style={style.dotUl}>
//                         {
//                             pic.map(picData => (
//                                 picData.id === -(switchCarousell / 100) + 1 ?
//                                     <li key={picData.id} style={style.dotLiActive} onClick={() => { handleDotnav(picData.id) }}></li>
//                                     :
//                                     <li key={picData.id} style={style.dotLiInActive} onClick={() => { handleDotnav(picData.id) }}></li>
//                             ))
//                         }

//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }



















const style = {
    container: {
        flex: 1,
        overflow: 'hidden',
    },
    wrap: {
        position: 'relative',
        // height: '700px'
        paddingBottom: '52%'
    },
    leftNav: {
        position: 'absolute',
        width: '50px',
        height: '50px',
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: '50px',
        top: '48%',
        left: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: '0.3s all ease-in-out',
    },
    leftNavHover: {
        position: 'absolute',
        width: '50px',
        height: '50px',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: '50px',
        top: '48%',
        left: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: '0.3s all ease-in-out',
    },
    arrowLeft: {
        width: '20px',
        height: '20px',
        borderTop: '4px solid #fff',
        borderLeft: '4px solid #fff',
        marginLeft: '5px',
    },
    rightNav: {
        position: 'absolute',
        width: '50px',
        height: '50px',
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: '50px',
        top: '48%',
        right: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: '0.3s all ease-in-out',
    },
    rightNavHover: {
        position: 'absolute',
        width: '50px',
        height: '50px',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: '50px',
        top: '48%',
        right: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: '0.3s all ease-in-out',
    },
    arrowRight: {
        width: '20px',
        height: '20px',
        borderTop: '4px solid #fff',
        borderRight: '4px solid #fff',
        marginRight: '5px',
    },
    carousellWrap: {
    },
    // carousellUl: {
    //     flex: 1,
    //     display: 'flex',
    //     width: '400%',
    //     position: 'absolute',
    //     left: '0%',
    //     transition: '0.3s all ease-in-out'
    // },
    carousellLi: {
        width: '100%',
    },
    pic: {
        width: '100%'
    },
    // dotNavWrap: {
    //     position: 'absolute',
    //     width: '200px',
    //     height: '30px',
    //     left: '0',
    //     right: '0',
    //     top: '92%',
    //     bottom: '0',
    //     margin: '0 auto'
    // },
    dotUl: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    dotLiActive: {
        width: '13px',
        height: '13px',
        borderRadius: '50px',
        backgroundColor: 'rgba(0,0,0,0.5)',
        cursor: 'pointer'
    },
    dotLiInActive: {
        width: '13px',
        height: '13px',
        borderRadius: '50px',
        backgroundColor: 'rgba(0,0,0,0.2)',
        cursor: 'pointer'
    },
}

export default Carousell;