export interface BaseDay {
    day: number,
    month: number,
    year: number,
}

export interface DiaryDay extends BaseDay {
    id: number,
    score: number,
    importance: number,
    inconsistency_min: number,
    inconsistency_max: number,
    atmosphere: number,
    createdAt: String,
    updatedAt: String,
    fullText: String,
}

export interface DiaryFlowScore extends BaseDay {
    flowScore: number,
}