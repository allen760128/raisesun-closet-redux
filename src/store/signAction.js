import {
    handle_signtoggle, handle_rwdtoggle,
    handle_forget, handle_forgetcancel,
    handle_md, handle_signscroll,
    handle_join, handle_joincancel,
    handle_scrollabout, handle_scrollpro,
    handle_scrollserv, handle_scrollcont,
    handle_top,
    handle_idchange,
    handle_passchange,
    handlesubmit,
    handle_idforget,
    handle_emailforget,
    handle_forgetsubmit,
    handle_namejoin,
    handle_idjoin,
    handle_passjoin,
    handle_conjoin,
    handle_datejoin,
    handle_phonejoin,
    handle_mailjoin,
    handle_joinsubmit,
    handle_iderror,
    handle_passerror,
    handle_localfalse,
    handle_clear,

} from './signTypes';


export const handleScrollabout = (e, scrollRef) => {
    return {
        type: handle_scrollabout,
        click: e.preventDefault(),
        scrollref: scrollRef
    }
}
export const handleScrollpro = (e, scrollRef) => {
    return {
        type: handle_scrollpro,
        click: e.preventDefault(),
        scrollproref: scrollRef
    }
}
export const handleScrollserv = (e, scrollRef) => {
    return {
        type: handle_scrollserv,
        click: e.preventDefault(),
        scrollservref: scrollRef
    }
}
export const handleScrollcont = (e, scrollRef) => {
    return {
        type: handle_scrollcont,
        click: e.preventDefault(),
        scrollcontref: scrollRef
    }
}
export const handleTop = (e, scrollTop) => {
    return {
        type: handle_top,
        click: e.preventDefault(),
        scrolltopref: scrollTop
    }
}
export const handleSingToggle = (e) => {
    return {
        type: handle_signtoggle,
        click: e.preventDefault(),
        value: e.target.value,
    }
}
export const handleLocalfalse = () => {
    return {
        type: handle_localfalse
    }
}
export const handleRwdToggle = (e) => {
    return {
        type: handle_rwdtoggle,
        click: e.preventDefault(),
    }
}
export const handleMd = (e) => {
    return {
        type: handle_md,
    }
}
export const handleSignscroll = (e) => {
    return {
        type: handle_signscroll,
    }
}



export const handleForget = (e) => {
    return {
        type: handle_forget,
        click: e.preventDefault()
    }
}
export const handleForgetCancel = (e) => {
    return {
        type: handle_forgetcancel,
        click: e.preventDefault(),
    }
}
export const handleJoin = (e) => {
    return {
        type: handle_join,
        click: e.preventDefault(),
    }
}
export const handleJoinCancel = (e) => {
    return {
        type: handle_joincancel,
        click: e.preventDefault(),
    }
}
export const handleClear = () => {
    return {
        type: handle_clear
    }
}

//替換
// export const handleIdchange = (e) => {
//     return {
//         type: handle_idchange,
//         idvalue: e.target.value
//     }
// }
// export const handlePasschange = (e) => {
//     return {
//         type: handle_passchange,
//         passvalue: e.target.value
//     }
// }
// export const handleIderror = (data) => {
//     return {
//         type: handle_iderror,
//         payload: data
//     }
// }
// export const handlePasserror = (data) => {
//     return {
//         type: handle_passerror,
//         payload: data
//     }
// }
// export const handleSubmit = (e, regular) => {
//     return {
//         type: handlesubmit,
//         click: e.preventDefault(),
//         reg: regular,
//     }
// }
export const handleIdforget = (e, regular) => {
    return {
        type: handle_idforget,
        mregular: regular,
        idforgetvalue: e.target.value
    }
}
export const handleEmailforget = (e, mailregular) => {
    return {
        type: handle_emailforget,
        emailforgetvalue: e.target.value,
        gmregular: mailregular,
    }
}
export const handleForgetsubmit = (e, regular, mailregular) => {
    return {
        type: handle_forgetsubmit,
        // click:e.preventDefault(),
        fregular: regular,
        rmregular: mailregular,
        // payload:e.target.value
    }
}


// export const handleNamejoin = (e) => {
//     return {
//         type: handle_namejoin,
//         namejoinvalue: e.target.value
//     }
// }
// export const handleIdjoin = (e) => {
//     return {
//         type: handle_idjoin,
//         idjoinvalue: e.target.value
//     }
// }
// export const handlePassjoin = (e) => {
//     return {
//         type: handle_passjoin,
//         passjoinvalue: e.target.value
//     }
// }
// export const handleConjoin = (e) => {
//     return {
//         type: handle_conjoin,
//         conjoinvalue: e.target.value
//     }
// }
// export const handleDatejoin = (e) => {
//     return {
//         type: handle_datejoin,
//         datejoinvalue: e.target.value
//     }
// }
// export const handlePhonejoin = (e) => {
//     return {
//         type: handle_phonejoin,
//         phonejoinvalue: e.target.value
//     }
// }
// export const handleMailjoin = (e) => {
//     return {
//         type: handle_mailjoin,
//         mailjoinvalue: e.target.value
//     }
// }
// export const handleJoinsubmit = (e, chiness, regular, mailregular, cell) => {
//     return {
//         type: handle_joinsubmit,
//         chiness: chiness,
//         click: e.preventDefault(),
//         regular: regular,
//         mailregular: mailregular,
//         cell: cell
//     }
// }