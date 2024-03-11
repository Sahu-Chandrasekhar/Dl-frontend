import React from 'react';
import { Grid } from '@mui/material';
import Drawer from '../../Components/Drawer';
import style from './style.module.css'
// import { useNavigate, useLocation } from 'react-router-dom';
// import Api from '../../../../Redux/apiConfig';
// import moment from 'moment';



const ViewDlUsers = () => {
    //   const navigate = useNavigate();
    //   const location = useLocation();


    return (
        <Grid sx={{ display: "flex", gap: 2 }}>
            <Grid>
                <Drawer />
            </Grid>

            <Grid className={style.tableContainer} sx={{ fontWeight: 600, marginTop: '80px', paddingBottom: '1%', paddingRight: '1%', width: '100%' }}>
                <p><span style={{ cursor: 'pointer' }}>Dashboard</span>/ViewDlUsers Profile</p>

                <Grid className={style.container}>

                    <Grid className={style.tableNav}>
                        <Grid className={style.navFirstContainer}>
                            {/*   <Grid className={style.navImg}>
                <img src={studentDisplay.image} alt='StudentImage' />
              </Grid> */}

                        </Grid>
                        <Grid className={style.navContainerTwo}>
                            <p>Application No :-<span>0115Fe84</span></p>
                        </Grid>
                    </Grid>

                    <Grid className={style.table}>
                        <Grid className={style.fstColumnContainer}>
                            <Grid className={style.firstColumn}>
                                <label className={style.label}>First Name</label>
                                <br />
                                <p className={style.fcPara}>firstName</p>
                            </Grid>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>Middle Name</label>
                                <br />
                                <p className={style.fcPara}>Adhaar Number</p>
                            </Grid>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>Last Name</label>
                                <br />
                                <p className={style.fcPara}>PAN Number</p>
                            </Grid>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>Gender</label>
                                <br />
                                <p className={style.fcPara}>Male</p>
                            </Grid>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>DOB</label>
                                <br />
                                <p className={style.fcPara}>('MMMM D, YYYY')</p>
                            </Grid>

                        </Grid>

                        <Grid className={style.seColumnContainer}>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>Category</label>
                                <br />
                                <p className={style.fcPara}>category</p>
                            </Grid>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>Father's Name</label>
                                <br />
                                <p className={style.fcPara}>fatherName</p>
                            </Grid>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>Mother's Name</label>
                                <br />
                                <p className={style.fcPara}>motherName</p>
                            </Grid>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>EmailId</label>
                                <br />
                                <p className={style.fcPara}>chandra@gmail.com</p>
                            </Grid>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>City/Village</label>
                                <br />
                                <p className={style.fcPara}>cityVillage</p>
                            </Grid>

                        </Grid>

                        <Grid className={style.thirdColumnContainer}>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>State</label>
                                <br />
                                <p className={style.fcPara}>state</p>
                            </Grid>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>Country</label>
                                <br />
                                <p className={style.fcPara}>country</p>
                            </Grid>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>Dist</label>
                                <br />
                                <p className={style.fcPara}>dist</p>
                            </Grid>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>Post</label>
                                <br />
                                <p className={style.fcPara}>post</p>
                            </Grid>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>Pin Code</label>
                                <br />
                                <p className={style.fcPara}>pinCode</p>
                            </Grid>

                        </Grid>

                        <Grid className={style.fourthColumn}>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>Phone No.</label>
                                <br />
                                <p className={style.fcPara}>phoneNo</p>
                            </Grid>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>Alternative Phone No</label>
                                <br />
                                <p className={style.fcPara}>alternativePhoneNo</p>
                            </Grid>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>Parent's Phone No.</label>
                                <br />
                                <p className={style.fcPara}>parentNo</p>
                            </Grid>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>Email Id</label>
                                <br />
                                <p className={style.fcPara}>emailId</p>
                            </Grid>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>Permanent Address</label>
                                <br />
                                <p className={style.fcPara}>permanentAddress</p>
                            </Grid>

                        </Grid>

                        <Grid className={style.fifthColumn}>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>Education</label>
                                <br />
                                <p className={style.fcPara}>education</p>
                            </Grid>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>Branch</label>
                                <br />
                                <p className={style.fcPara}>branch</p>
                            </Grid>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>Pass Year</label>
                                <br />
                                <p className={style.fcPara}>Passyear</p>
                            </Grid>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>Course Fee(PA)</label>
                                <br />
                                <p className={style.fcPara}>courseFee</p>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>

    )
}

export default ViewDlUsers
