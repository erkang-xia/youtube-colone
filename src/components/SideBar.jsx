import { Stack } from "@mui/material";
import { categories, youtubeGray } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        paddingLeft: "4px",
        paddingRight: "4px",
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            color: "white",
            justifyContent: "center",
          }}
          key={category.name}
        >
          <Stack
            sx={{
              paddingTop: "16px",
              paddingBottom: "14px",
            }}
          >
            <span
              style={{
                opacity: category.name === selectedCategory ? "1" : "0.5",
                marginBottom: "6px",
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                opacity: category.name === selectedCategory ? "1" : "0.5",
              }}
            >
              {category.name}
            </span>
          </Stack>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
