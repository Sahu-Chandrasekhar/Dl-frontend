import React, { useState } from 'react';
import styles from './style.module.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';
import Home from '../screens/RtoPage/components/Home';
import Drawer from '../screens/RtoPage/components/User/Drawer';
import Dashboard from '../screens/RtoPage/DashBoard';
import PrivateRoute from '../routes/privateRoute';
import { Box } from '@mui/material';

const AppRouter = () => {
    const [selectMenu, setSelectMenu] = useState('')
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route element={<PrivateRoute />} >
                    <Route
                        path="/dashboard"
                        element={
                            <Box sx={{ display: 'flex' }}>
                                <Drawer
                                    setSelectMenu={setSelectMenu}
                                    selectMenu={selectMenu === '' ? 'Dashboard' : selectMenu}
                                />

                                <Box
                                    component="main"
                                    className={styles.routerMainBox}
                                >
                                    <Dashboard />
                                </Box>
                            </Box>
                        } />
                    <Route path="/drawer" element={<Drawer />} />
                    <Route path='/home' element={<Home />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter;
