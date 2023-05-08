import {useParams} from 'next/navigation'
import {useMemo} from 'react'


const useConversation=()=>{
    const params=useParams();

    const conversationId=useMemo(()=>{
        if(!params.conversationId) {
            return ''
        }else{
            return params.conversationId as string;
        }
    },[params.conversationId])

    const isOpen=useMemo(()=>!!conversationId,[conversationId]);

    return useMemo(()=>({
        conversationId,
        isOpen
    }),[isOpen,conversationId])
}

export default useConversation;