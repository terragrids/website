import { strings } from '../../strings/en'
import styles from './roadmap.module.scss'
import RoadmapBlock from './roadmap-block'
import DarkSection from './section-dark'

export default function Roadmap() {
    return (
        <DarkSection wide>
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
                    ]} />
                <RoadmapBlock
                    number={2}
                    milestone={strings.current}
                    timeline={'Q3 / 2022'}
                    tasks={[
                        strings.startedCollaboration,
                        strings.webappPrototype,
                        strings.legalAdvice,
                        strings.draftTokenomics,
                        strings.kickstartFunding,
                        strings.mediumFirstPost,
                        strings.team2
                    ]} />
                <RoadmapBlock
                    number={3}
                    milestone={strings.wire}
                    timeline={'Q4 / 2022'}
                    tasks={[
                        strings.nonProfitSetup,
                        strings.kickstartFunding,
                        strings.tokenomicsFinal,
                        strings.website1_0,
                        strings.tokenPresale,
                        strings.webAppV1,
                        strings.team3
                    ]} />
                <RoadmapBlock
                    number={4}
                    milestone={strings.circuit}
                    timeline={'H1 / 2023'}
                    tasks={[
                        strings.tokenPublicSale,
                        strings.pilotSite,
                        strings.pilotDesign,
                        strings.installerSelectionStarted,
                        strings.webAppV2
                    ]} />
                <RoadmapBlock
                    number={5}
                    milestone={strings.grid}
                    timeline={'H2 / 2023'}
                    tasks={[
                        strings.pilotDone,
                        strings.webAppV3,
                        strings.newNFTs,
                        strings.governanceDefined,
                        strings.idoAllocation,
                        strings.newHomesSolarSystems
                    ]} />
            </div>
        </DarkSection>
    )
}