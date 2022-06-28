import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import Chip from "@mui/material/Chip";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Divider from "@mui/material/Divider";
import { grey } from "@mui/material/colors";

const Edit = (props) => {};
const Contenido = () => {
  return (
    <Card>
      <Box sx={{ p: 2, display: "flex" }}>
        <Avatar variant="rounded" src="avatar1.jpg" />
        <Stack spacing={0.5}>
          <Typography fontWeight={700}>Michael Scott</Typography>
          <Typography variant="body2" color="text.secondary">
            <LocationOnIcon sx={{ color: grey[500] }} /> Scranton, PA
          </Typography>
        </Stack>
        <IconButton>
          <Edit sx={{ fontSize: 14 }} />
        </IconButton>
      </Box>
      <Divider />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 2, py: 1, bgcolor: "background.default" }}
      >
        <Chip label="Active account" />
        <Switch />
      </Stack>
    </Card>
  );
};

export default function Etiqueta() {
  return <Contenido />;
}
