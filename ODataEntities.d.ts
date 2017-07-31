declare module ODataEntities {
    export module Edm {
        type Boolean = boolean;
        type Binary = Uint8Array;
        type DateTime = Date;
        type DateTimeOffset = Date;
        type Time = string;
        type Duration = string;
        type TimeOfDay = string;
        type Date = string;
        type Decimal = string;
        type Single = number;
        type Float = number;
        type Double = number;
        type Guid = string;
        type Int16 = number;
        type Int32 = number;
        type Int64 = string;
        type Byte = number;
        type SByte = number;
        type String = string;
    }
    export class Answer {
        Id: Edm.Int32;
        UserId: Edm.Int32;
        QuestionNumber: Edm.Int32;
        Answer_: Edm.String;
        AnswerTime: Edm.Int64;
        LegalTopicId: Edm.Int32;
        Correct: Edm.Int32;
        LegalSubjectId: Edm.Int32;
        AnswerDate: Edm.DateTimeOffset;
        TestId: Edm.Int32;
        Flagged: Edm.Boolean;
        IsBabyBar: Edm.Boolean;
        AssignmentId: Edm.Int32;
        User: User;
        Question: Question;
        LegalTopic: LegalTopic;
        LegalSubject: LegalSubject;
        Test: Test;
        Assignment: Assignment;
    }
    export class Assignment {
        Id: Edm.Int32;
        Name: Edm.String;
        DeanId: Edm.Int32;
        DateCreated: Edm.DateTimeOffset;
        NoOfQues: Edm.Int32;
        QuesNos: Edm.String;
        Type: Edm.Int32;
        Mode: Edm.Int32;
        NoOfStudents: Edm.Int32;
        StudentIDs: Edm.String;
        StartDate: Edm.DateTimeOffset;
        EndDate: Edm.DateTimeOffset;
        TimeLimit: Edm.Int64;
        Dean: User;
        StudentAssignments: StudentAssignment[];
        Answers: Answer[];
    }
    export class BarExamDate {
        Id: Edm.Int32;
        BarExamDate_: Edm.String;
        ExamDate: Edm.DateTimeOffset;
        StartDate: Edm.DateTimeOffset;
        EndDate: Edm.DateTimeOffset;
        IsBabyBarSession: Edm.Int32;
        UserBarSessions: UserBarSession[];
        FlashCardAnswers: FlashCardAnswer[];
        FlashCardAnswersNotes: FlashCardAnswersNote[];
        InteractivityUsers: InteractivityUser[];
        TestDriveUsers: TestDriveUser[];
    }
    export class Country {
        Id: Edm.Int32;
        Name: Edm.String;
        Regions: Region[];
        Users: User[];
        LawSchools: LawSchool[];
    }
    export class DeanLead {
        Id: Edm.Int32;
        FirstName: Edm.String;
        LastName: Edm.String;
        EMailAddress: Edm.String;
        Position: Edm.String;
        RoleInBarPrep: Edm.String;
        Phone: Edm.String;
        ReachBy: Edm.Int32;
        ReferralSourceTypeId: Edm.Int32;
        LawSchoolId: Edm.Int32;
        CreatedOn: Edm.DateTimeOffset;
        LawSchool: LawSchool;
        ReferralSourceType: ReferralSourceType;
    }
    export class DeansStudent {
        DeanId: Edm.Int32;
        UserBarSessionId: Edm.Int32;
        User: User;
        UserBarSession: UserBarSession;
    }
    export class FlashCardAnswer {
        Id: Edm.Int32;
        UserId: Edm.Int32;
        FlashCardId: Edm.Int32;
        Answers: Edm.Int32;
        AnswerDate: Edm.DateTimeOffset;
        BarExamDateId: Edm.Int32;
        User: User;
        FlashCard: FlashCard;
        BarExamDate: BarExamDate;
    }
    export class FlashCardAnswersNote {
        Id: Edm.Int32;
        UserId: Edm.Int32;
        FlashCardId: Edm.Int32;
        Notes: Edm.String;
        AnswerDate: Edm.DateTimeOffset;
        Flag: Edm.Boolean;
        BarExamDateId: Edm.Int32;
        User: User;
        FlashCard: FlashCard;
        BarExamDate: BarExamDate;
    }
    export class FlashCard {
        Id: Edm.Int32;
        Front: Edm.String;
        Back: Edm.String;
        IsTrial: Edm.Boolean;
        LegalSubjectId: Edm.Int32;
        LegalTopicId: Edm.Int32;
        LegalSubject: LegalSubject;
        LegalTopic: LegalTopic;
        FlashCardAnswers: FlashCardAnswer[];
        FlashCardAnswersNotes: FlashCardAnswersNote[];
    }
    export class InteractivityMessage {
        Id: Edm.Int32;
        Level: Edm.String;
        Message: Edm.String;
        WhenMessageAppears: Edm.String;
        Purge: Edm.Int32;
        Images: Edm.String;
        InteractivityUsers: InteractivityUser[];
    }
    export class InteractivityUser {
        Id: Edm.Int32;
        UserId: Edm.Int32;
        BarExamDateId: Edm.Int32;
        MessageId: Edm.Int32;
        DisplayDate: Edm.DateTimeOffset;
        Viewed: Edm.Int32;
        MarkedDelete: Edm.Int32;
        Comments: Edm.String;
        User: User;
        BarExamDate: BarExamDate;
        InteractivityMessage: InteractivityMessage;
    }
    export class LawSchool {
        Id: Edm.Int32;
        Name: Edm.String;
        CountryId: Edm.Int32;
        RegionId: Edm.Int32;
        Tier: Edm.Byte;
        Active: Edm.Int32;
        IsBabyBar: Edm.Boolean;
        ModifiedOn: Edm.DateTimeOffset;
        Country: Country;
        Region: Region;
        Users: User[];
        SemesterDates: SemesterDate[];
        DeanLeads: DeanLead[];
    }
    export class LegalSubject {
        SubjectId: Edm.Int32;
        Subject: Edm.String;
        SortOrder: Edm.Int32;
        ModifiedQuestions: ModifiedQuestion[];
        Questions: Question[];
        LegalTopics: LegalTopic[];
        FlashCards: FlashCard[];
        TryAdaptiBarQuestions: TryAdaptiBarQuestion[];
        Answers: Answer[];
        VideoNotes: VideoNote[];
        TryAdaptibarDemoAnswers: TryAdaptibarDemoAnswer[];
        MBEQuestionChallenges: MBEQuestionChallenge[];
    }
    export class LegalSubtopic {
        Id: Edm.Int32;
        LegalTopicId: Edm.Int32;
        Name: Edm.String;
        LegalTopic: LegalTopic;
        ModifiedQuestions: ModifiedQuestion[];
        Questions: Question[];
    }
    export class LegalTopic {
        Id: Edm.Int32;
        Name: Edm.String;
        LegalSubjectId: Edm.Int32;
        IsBabyBar: Edm.Boolean;
        SortOrder: Edm.Int32;
        LegalSubject: LegalSubject;
        Video: Video;
        ModifiedQuestions: ModifiedQuestion[];
        Questions: Question[];
        FlashCards: FlashCard[];
        TryAdaptiBarQuestions: TryAdaptiBarQuestion[];
        Answers: Answer[];
        VideoNotes: VideoNote[];
        TryAdaptibarDemoAnswers: TryAdaptibarDemoAnswer[];
        LegalSubtopics: LegalSubtopic[];
        MBEQuestionChallenges: MBEQuestionChallenge[];
    }
    export class Maintenance {
        Id: Edm.Int32;
        StartDate: Edm.DateTimeOffset;
        EndDate: Edm.DateTimeOffset;
        IsEnabled: Edm.Int32;
    }
    export class ModifiedQuestion {
        Id: Edm.Int32;
        Text: Edm.String;
        ExamYear: Edm.String;
        LegalTopicId: Edm.Int32;
        LegalSubjectId: Edm.Int32;
        AnswerA: Edm.String;
        AnswerB: Edm.String;
        AnswerC: Edm.String;
        AnswerD: Edm.String;
        CorrectAnswer: Edm.String;
        ExplanatoryAnswer: Edm.String;
        Moved: Edm.DateTimeOffset;
        LegalSubtopicId: Edm.Int32;
        LegalTopic: LegalTopic;
        LegalSubject: LegalSubject;
        LegalSubtopic: LegalSubtopic;
    }
    export class Question {
        Id: Edm.Int32;
        Text: Edm.String;
        ExamYear: Edm.String;
        LegalTopicId: Edm.Int32;
        LegalSubjectId: Edm.Int32;
        AnswerA: Edm.String;
        AnswerB: Edm.String;
        AnswerC: Edm.String;
        AnswerD: Edm.String;
        CorrectAnswer: Edm.String;
        ExplanatoryAnswer: Edm.String;
        LegalSubtopicId: Edm.Int32;
        LegalTopic: LegalTopic;
        LegalSubject: LegalSubject;
        LegalSubtopic: LegalSubtopic;
        Answers: Answer[];
        TryAdaptibarDemoAnswers: TryAdaptibarDemoAnswer[];
        AnswerSettings: QuestionAnswerSettings[];
        UserQuestions: UserQuestion[];
    }
    export class ReferralSource {
        Id: Edm.Int32;
        ReferralSourceTypeId: Edm.Int32;
        Description: Edm.String;
        CampusRep: Edm.Boolean;
        ReferralSourceType: ReferralSourceType;
    }
    export class ReferralSourceType {
        Id: Edm.Int32;
        Name: Edm.String;
        Users: User[];
        ReferralSources: ReferralSource[];
        DeanLeads: DeanLead[];
    }
    export class Region {
        RegionId: Edm.Int32;
        CountryId: Edm.Int32;
        Name: Edm.String;
        Code: Edm.String;
        ModifiedOn: Edm.DateTimeOffset;
        Country: Country;
        UserBarSessions: UserBarSession[];
        LawSchools: LawSchool[];
        Users: User[];
    }
    export class Role {
        RoleId: Edm.Int32;
        RoleName: Edm.String;
        UserBarSessions: UserBarSession[];
        Tabs: Tab[];
    }
    export class SemesterDate {
        Id: Edm.Int32;
        Name: Edm.String;
        StartDate: Edm.DateTimeOffset;
        EndDate: Edm.DateTimeOffset;
        SchoolId: Edm.Int32;
        LawSchool: LawSchool;
        UserBarSessions: UserBarSession[];
    }
    export class StudentAssignment {
        UserId: Edm.Int32;
        AssignmentId: Edm.Int32;
        EndDate: Edm.DateTimeOffset;
        LastQ: Edm.Int32;
        TimeTaken: Edm.String;
        Answers: Edm.String;
        Completed: Edm.Boolean;
        CorrectTotal: Edm.Int32;
        User: User;
        Assignment: Assignment;
    }
    export class Tab {
        TabId: Edm.Int32;
        RoleId: Edm.Int32;
        TabName: Edm.String;
        Role: Role;
    }
    export class TestDriveUser {
        Id: Edm.Int32;
        FirstName: Edm.String;
        LastName: Edm.String;
        Email: Edm.String;
        DateCreated: Edm.DateTimeOffset;
        BarExamDateId: Edm.Int32;
        BarExamDate: BarExamDate;
    }
    export class Test {
        Id: Edm.Int32;
        StudentId: Edm.Int32;
        TimeTaken: Edm.String;
        QuestionTotal: Edm.Int32;
        DateTaken: Edm.DateTimeOffset;
        LastQ: Edm.Int32;
        Completed: Edm.Boolean;
        Showtimer: Edm.Boolean;
        CorrectTotal: Edm.Int32;
        ExamYear: Edm.Int32;
        ExamName: Edm.String;
        ModifiedDate: Edm.DateTimeOffset;
        ArrayQuestions: Edm.String;
        AnswerList: Edm.String;
        Student: User;
        Answers: Answer[];
    }
    export class TimeZoneRespectToGmt {
        Id: Edm.Int32;
        TimeZoneName: Edm.String;
        Value: Edm.String;
        TimeZoneId: Edm.String;
        UserOptions: UserOption[];
    }
    export class TryAdaptiBarQuestion {
        Id: Edm.Int32;
        Text: Edm.String;
        ExamYear: Edm.String;
        LegalTopicId: Edm.Int32;
        LegalSubjectId: Edm.Int32;
        AnswerA: Edm.String;
        AnswerB: Edm.String;
        AnswerC: Edm.String;
        AnswerD: Edm.String;
        CorrectAnswer: Edm.String;
        ExplanatoryAnswer: Edm.String;
        LegalTopic: LegalTopic;
        LegalSubject: LegalSubject;
    }
    export class TryAdaptibarDemoAnswer {
        TryAdaptibarDemoAnswerId: Edm.Int32;
        QuestionNumber: Edm.Int32;
        Answer: Edm.String;
        AnswerTime: Edm.Int32;
        LegalTopicId: Edm.Int32;
        Correct: Edm.Int32;
        LegalSubjectId: Edm.Int32;
        AnswerDate: Edm.DateTimeOffset;
        TestSessionId: Edm.Int16;
        Flagged: Edm.Boolean;
        Question: Question;
        LegalTopic: LegalTopic;
        LegalSubject: LegalSubject;
    }
    export class UserBarSession {
        Id: Edm.Int32;
        UserId: Edm.Int32;
        BarExamDateId: Edm.Int32;
        IsPremium: Edm.Boolean;
        DiscountCode: Edm.String;
        RegionId: Edm.Int32;
        StartDate: Edm.DateTimeOffset;
        EndDate: Edm.DateTimeOffset;
        RoleId: Edm.Int32;
        BarExamTaken: Edm.Boolean;
        EnrollmentDate: Edm.DateTimeOffset;
        IsBabyBarStudent: Edm.Int32;
        ModifiedOn: Edm.DateTimeOffset;
        Crmid: Edm.Guid;
        PassStatus: Edm.Int32;
        SemesterDateId: Edm.Int32;
        User: User;
        BarExamDate: BarExamDate;
        Region: Region;
        Role: Role;
        SemesterDate: SemesterDate;
        DeansStudents: DeansStudent[];
    }
    export class User {
        Id: Edm.Int32;
        FirstName: Edm.String;
        LastName: Edm.String;
        Address: Edm.String;
        City: Edm.String;
        ZipCode: Edm.String;
        HomePhone: Edm.String;
        WorkPhone: Edm.String;
        Email: Edm.String;
        Password: Edm.String;
        Disabled: Edm.Boolean;
        Due: Edm.Decimal;
        CountryId: Edm.Int32;
        RegionId: Edm.Int32;
        ReferralSourceUserInput: Edm.String;
        LawSchoolId: Edm.Int32;
        ReferralSourceTypeId: Edm.Int32;
        KeepPrivate: Edm.Boolean;
        CreationDate: Edm.DateTimeOffset;
        BabyBarBasePrice: Edm.Decimal;
        MbeBasePrice: Edm.Decimal;
        ProfilePicPath: Edm.String;
        NickName: Edm.String;
        DbPoints: Edm.Int32;
        ModifiedOn: Edm.DateTimeOffset;
        W9Form: Edm.Boolean;
        DueReason: Edm.Int32;
        Videos: Edm.String;
        MbeQuestionsVideo: Edm.Boolean;
        PrepVideo: Edm.Boolean;
        TermsOfUse: Edm.Boolean;
        IntroductionSurveyId: Edm.Int32;
        SurveyId: any;
        UserOption: UserOption;
        ReferralSourceType: ReferralSourceType;
        Country: Country;
        Region: Region;
        UserOtherInformation: UserOtherInformation;
        LawSchool: LawSchool;
        StudentAssignments: StudentAssignment[];
        UserBarSessions: UserBarSession[];
        FlashCardAnswers: FlashCardAnswer[];
        FlashCardAnswersNotes: FlashCardAnswersNote[];
        InteractivityUsers: InteractivityUser[];
        DeansStudents: DeansStudent[];
        Answers: Answer[];
        Assignments: Assignment[];
        UserNotes: UserNote[];
        Tests: Test[];
        VideoNotes: VideoNote[];
        QuestionAnswerSettings: QuestionAnswerSettings[];
        UserQuestions: UserQuestion[];
        MBEQuestionChallenges: MBEQuestionChallenge[];
    }
    export class UserOption {
        UserId: Edm.Int32;
        ConstitutionalLaw: Edm.Boolean;
        Contracts: Edm.Boolean;
        CriminalLaw: Edm.Boolean;
        Evidence: Edm.Boolean;
        RealProperty: Edm.Boolean;
        Torts: Edm.Boolean;
        ShowTimer: Edm.Boolean;
        ShowQuestion: Edm.Boolean;
        ShowQnums: Edm.Boolean;
        ChartStartDate: Edm.DateTimeOffset;
        ChartEndDate: Edm.DateTimeOffset;
        ViewAllDates: Edm.Boolean;
        TimeZoneId: Edm.Int32;
        IsFlashCards: Edm.Int32;
        FlashCardBarSession: Edm.Int32;
        IsMsgCenterEnabled: Edm.Int32;
        CustomizedTimer: Edm.Int32;
        IsEmailAllowed: Edm.Int32;
        IsReplyEmail: Edm.Int32;
        IsUserLog: Edm.Int32;
        IsLawSchool: Edm.Int32;
        IsMemberInfo: Edm.Int32;
        IsLocation: Edm.Int32;
        IsNickName: Edm.Int32;
        IsProfilePic: Edm.Int32;
        IsMaintenanceModal: Edm.Int32;
        FlashStartDate: Edm.DateTimeOffset;
        FlashEndDate: Edm.DateTimeOffset;
        FcViewAllDates: Edm.Boolean;
        ViewCurrentSession: Edm.Boolean;
        DeanSessionSelection: Edm.String;
        KeyboardShortcut: Edm.Boolean;
        SidePanel: Edm.Boolean;
        TimingFeedback: Edm.Boolean;
        ShowReferralPopUp: Edm.Boolean;
        IconPpt: Edm.Boolean;
        IconSubjPerf: Edm.Boolean;
        ModifiedOn: Edm.DateTimeOffset;
        CivilProcedure: Edm.Boolean;
        ShowDashboardTour: Edm.Boolean;
        ShowQuestionsSettingsTour: Edm.Boolean;
        ShowQuestionTour: Edm.Boolean;
        ShowExamSettingsTour: Edm.Boolean;
        ShowFlashcardSettingsTour: Edm.Boolean;
        ShowFlashcardStudyTour: Edm.Boolean;
        ShowInstructions: Edm.Boolean;
        ShowAllUserStats: Edm.Boolean;
        AssignmentAccess: Edm.Boolean;
        User: User;
        TimeZone: TimeZoneRespectToGmt;
    }
    export class UserOtherInformation {
        Id: Edm.Int32;
        LawSchool: Edm.String;
        Region: Edm.String;
        User: User;
    }
    export class VideoNote {
        Id: Edm.Int32;
        UserId: Edm.Int32;
        DateCreated: Edm.DateTimeOffset;
        Notes: Edm.String;
        LegalSubjectId: Edm.Int32;
        LegalTopicId: Edm.Int32;
        AdditionalVideo: Edm.Int32;
        User: User;
        LegalTopic: LegalTopic;
        LegalSubject: LegalSubject;
    }
    export class VideoPrice {
        Id: Edm.Int32;
        ObjName: Edm.String;
        ObjPrice: Edm.String;
        SubjectSequence: Edm.String;
        VideoDuration: Edm.String;
    }
    export class Video {
        LegalTopicId: Edm.Int32;
        Url: Edm.String;
        LegalTopic: LegalTopic;
    }
    export class QuestionAnswerSettings {
        QuestionId: Edm.Int32;
        QuestionAnswer: Edm.String;
        UserId: Edm.Int32;
        IsHidden: Edm.Boolean;
        Question: Question;
        User: User;
    }
    export class UserQuestion {
        UserId: Edm.Int32;
        QuestionId: Edm.Int32;
        StartMarker: Edm.Int32;
        EndMarker: Edm.Int32;
        User: User;
        Question: Question;
    }
    export class MBEQuestionChallenge {
        Id: Edm.Int32;
        UserId: Edm.Int32;
        LegalTopicId: Edm.Int32;
        LegalSubjectId: Edm.Int32;
        Question: Edm.String;
        AnswerA: Edm.String;
        AnswerB: Edm.String;
        AnswerC: Edm.String;
        AnswerD: Edm.String;
        CorrectAnswer: Edm.String;
        ExplanatoryAnswer: Edm.String;
        TermsOfUse: Edm.Boolean;
        Authorization: Edm.Boolean;
        User: User;
        LegalTopic: LegalTopic;
        LegalSubject: LegalSubject;
    }
    export class UserNote {
        NoteId: Edm.Int32;
        UserId: Edm.Int32;
        Note: Edm.String;
        DateAdded: Edm.DateTimeOffset;
        AddedById: Edm.String;
        User: User;
        AdaptibarStaffUser: AdaptibarStaffUser;
    }
    export class AdaptibarStaffUser {
        FirstName: Edm.String;
        LastName: Edm.String;
        UserId: Edm.String;
        Password: Edm.String;
        Permissions: Edm.String;
        UserNotes: UserNote[];
    }
    export class Reseller {
        SessionPrice: Edm.Decimal;
        AdditionalSessionPrice: Edm.Decimal;
        ReEnrollmentPrice: Edm.Decimal;
        ResellerStudents: ResellerStudent[];
        ResellerReports: ResellerReport[];
    }
    export class ResellerStudent {
        UserBarSessionId: Edm.Int32;
        UserId: Edm.Int32;
        ResellerId: Edm.Int32;
        ActiveForStats: Edm.Boolean;
        Check: Edm.Boolean;
        Disclaimer: Edm.Boolean;
        User: User;
        Reseller: Reseller;
        UserBarSession: UserBarSession;
    }
    export class ResellerReport {
        Id: Edm.Int32;
        ResellerId: Edm.Int32;
        ReportPath: Edm.String;
        DateCreated: Edm.DateTimeOffset;
        StartDate: Edm.String;
        EndDate: Edm.String;
        NumStudents: Edm.Int32;
        Reseller: Reseller;
    }
}