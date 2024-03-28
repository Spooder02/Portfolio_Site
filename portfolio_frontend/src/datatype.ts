export default interface ItemCardData {
    id: number,
    image: string|null,
    title: string,
    creator: string,
    stacks: Array<string>,
    date: string,
    description: string,
}

export default interface ProjectData {
    id: number,
    image: string|null,
    title: string,
    creator: string,
    stacks: Array<string>,
    github_link: string|null,
    project_link: string|null,
    date: string,
    description: string,
    content: string
}