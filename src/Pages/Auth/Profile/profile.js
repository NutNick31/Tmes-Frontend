import React from "react";
import Logout from './../logout';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import "./profile.scss";

export default function ProfilePage() {
    let navigate = useNavigate();

    if (!localStorage.getItem('curUser')) {
        navigate('/signin');
    }

    // fetching items from localstorage
    let user = JSON.parse(localStorage.getItem("curUser"));
    const rows = [
        ['First Name', user ? user.firstName : null],
        ['Last Name', user ? user.lastName : null],
        ['User Name', user ? user.userName : null],
        ['Email', user ? user.email : null],
        ['Alt Email', user ? user.altEmail : null],
        ['Mobile', user ? user.mobile : null],
        ['Alt Mobile', user ? user.altMobile : null],
    ];
    return (
        <>
            <div className="center">
                <Paper sx={{ width: 650, backgroundColor: '#fff', m: 2 }}>
                    <Typography variant="h2" component="h2" sx={{ mx: 2, pt: 3, mb: 2 }}>
                        User Profile
                    </Typography>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                {rows.map((e) => {
                                    return (
                                        <TableRow>
                                            <TableCell>
                                                <Typography
                                                    sx={{ fontSize: 20 }}
                                                    variant="subtitle1"
                                                    color="textSecondary"
                                                >
                                                    {e[0]}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography
                                                    sx={{ fontSize: 20 }}
                                                    variant="subtitle1"
                                                    color="textSecondary"
                                                >
                                                    :
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography sx={{ fontSize: 20 }}> {e[1]}</Typography>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                        <Logout />
                    </TableContainer>
                </Paper>
            </div>
        </>
    );
}
