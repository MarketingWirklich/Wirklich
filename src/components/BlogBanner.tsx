import { Box } from "@mui/material";

type IBlogBanner = {
    image?: string
}

export function BlogBanner({image}: IBlogBanner) {
    return (
        <>
        <Box className="w-full relative">
        <img className="w-full h-[300px] lg:h-[570px] 2xl:h-[680px]" src={image} />
        </Box>
        </>
    )
}