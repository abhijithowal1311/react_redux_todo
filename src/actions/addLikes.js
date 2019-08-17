
export function addLikes(likeIndex){
    
    return {
        type: "add_likes",
        index : likeIndex
    }
}

export function removeLikes(likeIndex){
    
    return {
        type: "remove_likes",
        index : likeIndex
    }
}