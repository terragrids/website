import styles from './roadmap-block.module.scss'

export default function RoadmapBlock({ number, milestone, timeline, tasks }) {
    return (
        <div className={styles.container}>
            <h3>#{number} {milestone}</h3>
            <h4>{timeline}</h4>
            <ul>
                {tasks.map(task => <li key={task}><i className={'icon-chevron-right-circle'} />{task}</li>)}
            </ul>
        </div>
    )
}