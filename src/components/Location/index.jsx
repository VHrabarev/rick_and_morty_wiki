import { Box, Typography, Divider, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Grid, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const Location = function(props) {
    const defaultLocation = {
        name: "location name",
        dimension: "dimension name",
        id: 0,
        residents: [{ id: 0, image: "residents image", name: "resident name" }],
        type: "location type",
    };
    const {location = defaultLocation} = props;

    return (
        <Box component="section">
            <Typography component="h2" variant="h4" sx={{ mb: 2 }}>Location</Typography>
            <Box sx={{ backgroundColor: "#e7e7e7", borderRadius: 2, p: "12px 24px", mb: 2 }}>
                <Typography variant="h5" fontWeight={700} mb={1}>{location.name}</Typography>
                <Divider sx={{ mb: 1 }}/>
                <TableContainer>
                    <Table stickyHeader aria-label={`${location.name} table info`}>
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    align="center"
                                    colSpan={2}
                                    sx={{ p: 0, backgroundColor: "inherit", fontSize: "16px", fontWeight: "600", borderBottom: "none" }}
                                >
                                    Info
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell sx={{ fontSize: "16px" }}>
                                    <Box color="#727272" fontSize={14}>Type: </Box>{location.type}
                                </TableCell>
                                <TableCell sx={{ fontSize: "16px" }}>
                                    <Box color="#727272" fontSize={14}>Dimension: </Box>{location.dimension}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box sx={{ backgroundColor: "#e7e7e7", borderRadius: 2, p: "12px 24px" }}>
                <Typography variant="h6" fontWeight={700} mb={1}>Residents</Typography>
                <Divider sx={{ mb: 2 }} />
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {location.residents.map( resident => {
                        return (
                            <Grid item key={resident.id} xs={4}>
                                <Link
                                    to={`/characters/${resident.id}`}
                                    className="link"
                                    style={{ display: "flex", flexWrap: "nowrap", alignItems: "center" }}
                                >
                                    <Avatar src={resident.image} sx={{ width: 60, height: 60, mr: 1 }}>{resident.name[0]}</Avatar>
                                    <Typography>{resident.name}</Typography>
                                </Link>
                            </ Grid>    
                        );
                    })}
                </Grid>
            </Box>
        </Box>
    );
};

export default Location;