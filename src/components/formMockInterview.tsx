import type { Interview } from "@/types";

interface FormMockInterviewProps {
    initialData: Interview | null;
}
export const FormMockInterview = ({ initialData }: FormMockInterviewProps) => {
    return (
        <div>
            {initialData ? (
                <h1>Edit Interview</h1>
            ) : (
                <h1>Create Interview</h1>
            )}
        </div>
    )
}
