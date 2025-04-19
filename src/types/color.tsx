

// export const colorTags: any = {
//     'open': 'bg-green-200 text-green-600',
//     'ignore': 'bg-gray-200 text-gray-600',
//     'closed': 'bg-sky-200 text-sky-600',
    
//     'avianintek': 'bg-orange-200 text-orange-600',
//     'picdb': 'bg-orange-200 text-orange-600',
//     'picdb-docs': 'bg-orange-200 text-orange-600',
//     'picdb-api': 'bg-orange-200 text-orange-600'
// }


export function colorTags(tag: string, index: number) {
    if (tag === 'open') {
        return (<span key={index} className="bg-green-200 text-green-600 text-xs font-semibold px-2 py-1 rounded-lg capitalize">
            {tag}
        </span>)
    } else if (tag === 'ignore') {
        return (<span key={index} className="bg-gray-200 text-gray-600 text-xs font-semibold px-2 py-1 rounded-lg capitalize">
            {tag}
        </span>)
    } else if (tag === 'closed') {
        return (<span key={index} className="bg-sky-200 text-sky-600 text-xs font-semibold px-2 py-1 rounded-lg capitalize">
            {tag}
        </span>)
    } else if (tag === 'avianintek' || tag === 'picdb' || tag === 'picdb-docs' || tag === 'picdb-api') {
        return (<span key={index} className="bg-orange-200 text-orange-600 text-xs font-semibold px-2 py-1 rounded-lg capitalize">
            {tag}
        </span>)
    } else {
        return (<span key={index} className="bg-yellow-200 text-yellow-600 text-xs font-semibold px-2 py-1 rounded-lg capitalize">
            {tag}
        </span>)
    }
}



export const fileColor: any = {
    'pdf': 'red',
    'doc': 'blue',
    'txt': 'yellow',
    'xls': 'green',
    'ppt': 'orange',
    'jpg': 'pink',
    'png': 'purple',
    'zip': 'indigo',
    'rar': 'teal',
    'mp3': 'cyan',
    'mp4': 'lime',
    'avi': 'amber',
}