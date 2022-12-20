import { TableContainer, Table, TableBody, TableRow, TableCell, Paper } from "@mui/material";

const FirstTab = function(props) {
    const {userInfo} =props;
    return (
        <TableContainer component={Paper}>
            <Table aria-label="User info table">
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">Name</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">Email</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">Phone</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default FirstTab;