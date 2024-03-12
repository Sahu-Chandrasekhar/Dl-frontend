import React from 'react';
import { Grid } from '@mui/material';
import Drawer from '../../Components/Drawer';
import style from './style.module.css'
import { useNavigate, useLocation } from 'react-router-dom';
import Api from '../../../../../src/config/index';
import moment from 'moment';



const ViewDlUsers = () => {
    const navigate = useNavigate();
    const location = useLocation();


    return (
        <Grid sx={{ display: "flex", gap: 2 }}>
            <Grid>
                <Drawer />
            </Grid>

            <Grid className={style.tableContainer} sx={{ fontWeight: 600, marginTop: '80px', paddingBottom: '1%', paddingRight: '1%', width: '100%' }}>
                <Grid className={style.container}>
                    <Grid className={style.table}>
                        <Grid className={style.fstColumnContainer}>
                            <Grid className={style.firstColumn}>
                                <label className={style.label}>Name</label>
                                <br />
                                <p className={style.fcPara}>name</p>
                            </Grid>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>Adhaar Number</label>
                                <br />
                                <p className={style.fcPara}>Adhaar</p>
                            </Grid>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>PAN NUmber</label>
                                <br />
                                <p className={style.fcPara}>Pan</p>
                            </Grid>

                            <Grid className={style.firstColumn}>
                                <label className={style.label}>Dl</label>
                                <br />
                                <p className={style.fcPara}>Dl</p>
                            </Grid>
                            <Grid className={style.firstColumn}>
                                <label className={style.label}>Status</label>
                                <br />
                                <p className={style.fcPara}>Status</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>

    )
}

export default ViewDlUsers
