import { IGroup } from "../utils/types";

type Prop = {
    group: IGroup;
}

export default function SingleGroup({ group }: Prop) {
    return (
        <div>{group.name}</div>
    )
}