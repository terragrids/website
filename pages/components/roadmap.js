import { strings } from '../../strings/en'
import styles from './roadmap.module.scss'
import RoadmapBlock from './roadmap-block'
import DarkSection from './section-dark'
import Anchor from './anchor'

export default function Roadmap() {
    return (
        <DarkSection wide>
            <Anchor id={'roadmap'} />
            <h2>{strings.roadmap}</h2>
            <div className={styles.content}>
                <RoadmapBlock
                    number={1}
                    milestone={strings.electron}
                    timeline={'Q2 / 2022'}
                    tasks={[
                        strings.concept,
                        strings.whitepaper,
                        strings.roadmap,
                        strings.website1_0,
                        strings.openSourceSetUp,
                        strings.webappDesign,
                        strings.socialCommunities,
                        strings.team1
                    ]}
                />
                <RoadmapBlock
                    number={2}
                    milestone={strings.current}
                    timeline={'Q3 / 2022'}
                    tasks={[
                        strings.webappPrototype,
                        strings.draftTokenomics,
                        strings.algorandGreenhouseRound1Completed,
                        strings.team2
                    ]}
                />
                <RoadmapBlock
                    number={3}
                    milestone={strings.wire}
                    timeline={'Q4 / 2022'}
                    tasks={[
                        strings.tokenomicsFinal,
                        'Algorand Greenhouse Hack #2',
                        'Project Smart Contract',
                        'Pera Wallet',
                        'Authentication',
                        'NFT / Project linking',
                        'Decipher',
                        'Pre-seed'
                    ]}
                />
                <RoadmapBlock
                    number={4}
                    milestone={strings.circuit}
                    timeline={'H1 / 2023'}
                    tasks={['Full MVP on Testnet', '2+ Crowdfund projects on Testnet', 'More NFTs', 'x3 team growth']}
                />
                <RoadmapBlock
                    number={5}
                    milestone={strings.grid}
                    timeline={'H2 / 2023'}
                    tasks={['Launch on Mainnet', '10+ Crowdfund Projects', '100+ Crowdfund backers']}
                />
            </div>
        </DarkSection>
    )
}
