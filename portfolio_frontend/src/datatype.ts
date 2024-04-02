interface ItemCardData {
    id: number,
    image: File|null,
    title: string,
    stacks: Array<stack>,
    date: string,
    description: string,
    teammates: Array<teammates>,
}

interface ProjectData extends ItemCardData {
    github_link: string|null,
    project_link: string|null,
    content: string
}

interface stack {
    stack_id: number,
    stack_name: string
}

interface teammates {
    teammate_id: number,
    name: string,
    part: string
}

export type { ItemCardData, ProjectData, stack, teammates };

/*
    id: number,
    image: File|null,
    title: string,
    category: string,
    stacks: Array<stack>,
    date: string,
    description: string,
**/