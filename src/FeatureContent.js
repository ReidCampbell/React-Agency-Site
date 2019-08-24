import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import "./FeatureContent.css";

// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1
//     },
//     paper: {
//         padding: theme.spacing(2),
//         textAlign: "center",
//         color: theme.palette.text.secondary
//     }
// }));

const FeatureContent = () => {
    // const classes = useStyles();
    return (
        // <div class="feature-container">
        //     <div class="row">
        //         <div class="column">
        //             <div class="left-column">
        //                 <h1>Content</h1>
        //                 <p>content</p>
        //                 <button>Find Out More</button>
        //             </div>
        //         </div>
        //         <div class="column">
        //             <div class="right-column">
        //                 <img src={require("./images/circle.png")} width={150} />
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <Grid
            container
            spacing={10}
            justify="space-evenly"
            alignItems="center"
            className="grid-container"
        >
            <Grid
                item
                xs={3}
                container
                alignContent="center"
                className="grid-cell"
            >
                <h3>CX50 2019</h3>
                <p>
                    In association with Coggnizant and Marektign Week, Zone are
                    excited to launch the second anniual CX50. The list of dcsds
                    ddadsjkak kadad kajdbkajdakdak jdakjkajdbnk
                    bndkajdakjdbdbajdab dajs dba the cstern shte bdahdbak
                    barandf fkr.
                </p>
                <p classname="content-cta">
                    <button className="cta-btn">Find Out More</button>
                </p>
            </Grid>
            <Grid
                item
                xs={3}
                container
                direction="row"
                justify="space-around"
                alignItems="center"
            >
                Right
            </Grid>
        </Grid>
    );
};

export default FeatureContent;
