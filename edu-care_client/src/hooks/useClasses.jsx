import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";

const useClasses = () => {
    const {axiosSecure} = useAxiosSecure()
    const {data: classes = [], refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get("http://localhost:8888/popular-classes")
            return res.data
        }
    })
    return {classes, refetch}
};

export default useClasses;