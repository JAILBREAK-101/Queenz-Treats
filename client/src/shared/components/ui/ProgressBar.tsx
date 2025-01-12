import { Progress, Box } from "@radix-ui/themes"; 

const ProgressBar = (progress: number) => {
  return (
    <Box className="m-4 p-4" width={"300px"}>
      <Progress value={progress}/>
    </Box>
  );
};

export { ProgressBar };
