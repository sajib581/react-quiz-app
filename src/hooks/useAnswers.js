import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswers(videoId) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [answers, setAnswers] = useState([])

    useEffect(() => {        
        async function fetchAnswers() {
            const db = getDatabase()
            const answerRef = ref(db, "answers/" + videoId + '/questions')
            const answerQuerey = query(
                answerRef, 
                orderByKey()
                )

            try {
                setError(false);
                setLoading(true);
                //request firebase Database 
                const snapshot = await get(answerQuerey)
                setLoading(false)
                if (snapshot.exists()) {
                    setAnswers(prevAnswers => {
                        return [...prevAnswers, ...Object.values(snapshot.val())]
                    })
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }
        fetchAnswers()
    }, [videoId])
    return {
        loading,
        error,
        answers
    }
}
