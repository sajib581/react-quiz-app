import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(videoId) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [questions, setQuestions ] = useState([])

    useEffect(() => {        
        async function fetchQuestions() {
            const db = getDatabase()
            const quizRef = ref(db, "quiz/" + videoId + '/questions')
            const quizQuerey = query(
                quizRef, 
                orderByKey()
                )

            try {
                setError(false);
                setLoading(true);
                //request firebase Database 
                const snapshot = await get(quizQuerey)
                setLoading(false)
                if (snapshot.exists()) {
                    setQuestions(prevQuestions => {
                        return [...prevQuestions, ...Object.values(snapshot.val())]
                    })
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }
        fetchQuestions()
    }, [videoId])
    return {
        loading,
        error,
        questions
    }
}
