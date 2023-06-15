import { Stack, Box } from "@mui/material";
import { categories, youtubeGray } from "../utils/constants";
import MenuIcon from "@mui/icons-material/Menu";

const SideBarFull = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && "#494949",
            color: "white",
            marginLeft: "12px",
            marginRight: "12px",
          }}
          key={category.name}
        >
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "flex-end",
              alignItems: "center",
              paddingX: "12px",
              paddingY: "5px",
            }}
          >
            <Box
              sx={{
                color:
                  category.name === selectedCategory ? youtubeGray : "white",
                marginRight: "24px",
              }}
            >
              {category.icon}
            </Box>
            <Box
              sx={{
                opacity: category.name === selectedCategory ? "1" : "0.8",
                fontSize: "1.1rem",
              }}
            >
              {category.name}
            </Box>
          </Stack>
        </button>
      ))}
    </Stack>
  );
};

export default SideBarFull;
