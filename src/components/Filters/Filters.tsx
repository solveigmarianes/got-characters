import './Filters.scss'
import {useState} from "react";

interface FiltersProps {
    families: string[],
    filterByFamily: Function,
    resetFilter: Function
}

export default function Filters({families, filterByFamily, resetFilter}: FiltersProps) {
    const [isOpen, setOpen] = useState<boolean>(false)
    const [activeFilter, setActiveFilter] = useState<string>("")

    const applyFilter = (family: string) => {
        setOpen(false);
        filterByFamily(family)
        setActiveFilter(family)
    }

    const reset = () => {
        resetFilter()
        setActiveFilter("")
    }

    const FamilyFilterButton = ({family}: { family: string }) => {
        return (
            <li className="filter-item">
                <button onClick={() => applyFilter(family)}>{family}</button>
            </li>
        )
    }
    return (
        <div className="filter-container">
            <div className="filter-controls">
                <button onClick={() => reset()}>
                    <i className="bi bi-arrow-counterclockwise"/> Reset filter
                </button>
                <button onClick={() => setOpen(!isOpen)}>
                    <i className="bi bi-funnel-fill"/> {activeFilter ? `Filter: ${activeFilter} ` : 'Filter characters '}
                    <i className="bi bi-chevron-down"/>
                </button>
            </div>
            {isOpen &&
                <ul className="filters">
                    {families?.map(family => family &&
                        <FamilyFilterButton family={family} key={family}/>)}
                </ul>
            }
        </div>
    )

}
