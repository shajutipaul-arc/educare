
import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";


const useInstructors = () => {
    const {axiosSecure} = useAxiosSecure()
    const {data: instructors = []} = useQuery({
        queryKey: ["popular-instructor"],
        queryFn: async () => {
            const res = await axiosSecure.get("http://localhost:8888/popular-instructors")
            return res.data
        }
    })
    return {instructors}
    
};

export default useInstructors;