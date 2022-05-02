import './Filters.scss'

interface FiltersProps {
    families: string[],
    filterByFamily: Function
}

export default function Filters({families, filterByFamily}: FiltersProps) {
    const FamilyFilterButton = ({family}: {family: string}) => {
        return (
            <li className="filter-item">
                <button onClick={() => filterByFamily(family)}>{family}</button>
            </li>
        )
    }
    return (
        <ul className="filters">
            {families?.map(family => family && <FamilyFilterButton family={family} key={family} />)}
        </ul>
    )

}
