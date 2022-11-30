import { Box } from "@mui/material";

type IBlogBanner = {
    image?: string
}

export function BlogBanner({image}: IBlogBanner) {
    return (
        <>
        <Box className="w-full relative">
        <img className="w-full h-[570px]" src={image} />
        </Box>
        </>
    )
}