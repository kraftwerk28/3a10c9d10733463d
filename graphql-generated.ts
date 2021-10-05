import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamp: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "latest_todos" */
export type Latest_Todos = {
  __typename?: 'latest_todos';
  created_at?: Maybe<Scalars['timestamptz']>;
  done?: Maybe<Scalars['Boolean']>;
  is_deleted?: Maybe<Scalars['Boolean']>;
  t?: Maybe<Scalars['timestamp']>;
  text?: Maybe<Scalars['String']>;
  todo_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "latest_todos" */
export type Latest_Todos_Aggregate = {
  __typename?: 'latest_todos_aggregate';
  aggregate?: Maybe<Latest_Todos_Aggregate_Fields>;
  nodes: Array<Latest_Todos>;
};

/** aggregate fields of "latest_todos" */
export type Latest_Todos_Aggregate_Fields = {
  __typename?: 'latest_todos_aggregate_fields';
  avg?: Maybe<Latest_Todos_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Latest_Todos_Max_Fields>;
  min?: Maybe<Latest_Todos_Min_Fields>;
  stddev?: Maybe<Latest_Todos_Stddev_Fields>;
  stddev_pop?: Maybe<Latest_Todos_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Latest_Todos_Stddev_Samp_Fields>;
  sum?: Maybe<Latest_Todos_Sum_Fields>;
  var_pop?: Maybe<Latest_Todos_Var_Pop_Fields>;
  var_samp?: Maybe<Latest_Todos_Var_Samp_Fields>;
  variance?: Maybe<Latest_Todos_Variance_Fields>;
};


/** aggregate fields of "latest_todos" */
export type Latest_Todos_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Latest_Todos_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Latest_Todos_Avg_Fields = {
  __typename?: 'latest_todos_avg_fields';
  todo_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "latest_todos". All fields are combined with a logical 'AND'. */
export type Latest_Todos_Bool_Exp = {
  _and?: Maybe<Array<Latest_Todos_Bool_Exp>>;
  _not?: Maybe<Latest_Todos_Bool_Exp>;
  _or?: Maybe<Array<Latest_Todos_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  done?: Maybe<Boolean_Comparison_Exp>;
  is_deleted?: Maybe<Boolean_Comparison_Exp>;
  t?: Maybe<Timestamp_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  todo_id?: Maybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Latest_Todos_Max_Fields = {
  __typename?: 'latest_todos_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  t?: Maybe<Scalars['timestamp']>;
  text?: Maybe<Scalars['String']>;
  todo_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Latest_Todos_Min_Fields = {
  __typename?: 'latest_todos_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  t?: Maybe<Scalars['timestamp']>;
  text?: Maybe<Scalars['String']>;
  todo_id?: Maybe<Scalars['Int']>;
};

/** Ordering options when selecting data from "latest_todos". */
export type Latest_Todos_Order_By = {
  created_at?: Maybe<Order_By>;
  done?: Maybe<Order_By>;
  is_deleted?: Maybe<Order_By>;
  t?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  todo_id?: Maybe<Order_By>;
};

/** select columns of table "latest_todos" */
export enum Latest_Todos_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Done = 'done',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  T = 't',
  /** column name */
  Text = 'text',
  /** column name */
  TodoId = 'todo_id'
}

/** aggregate stddev on columns */
export type Latest_Todos_Stddev_Fields = {
  __typename?: 'latest_todos_stddev_fields';
  todo_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Latest_Todos_Stddev_Pop_Fields = {
  __typename?: 'latest_todos_stddev_pop_fields';
  todo_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Latest_Todos_Stddev_Samp_Fields = {
  __typename?: 'latest_todos_stddev_samp_fields';
  todo_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Latest_Todos_Sum_Fields = {
  __typename?: 'latest_todos_sum_fields';
  todo_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Latest_Todos_Var_Pop_Fields = {
  __typename?: 'latest_todos_var_pop_fields';
  todo_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Latest_Todos_Var_Samp_Fields = {
  __typename?: 'latest_todos_var_samp_fields';
  todo_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Latest_Todos_Variance_Fields = {
  __typename?: 'latest_todos_variance_fields';
  todo_id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "todo_attachments" */
  delete_todo_attachments?: Maybe<Todo_Attachments_Mutation_Response>;
  /** delete single row from the table: "todo_attachments" */
  delete_todo_attachments_by_pk?: Maybe<Todo_Attachments>;
  /** delete data from the table: "todos" */
  delete_todos?: Maybe<Todos_Mutation_Response>;
  /** delete single row from the table: "todos" */
  delete_todos_by_pk?: Maybe<Todos>;
  /** insert data into the table: "todo_attachments" */
  insert_todo_attachments?: Maybe<Todo_Attachments_Mutation_Response>;
  /** insert a single row into the table: "todo_attachments" */
  insert_todo_attachments_one?: Maybe<Todo_Attachments>;
  /** insert data into the table: "todos" */
  insert_todos?: Maybe<Todos_Mutation_Response>;
  /** insert a single row into the table: "todos" */
  insert_todos_one?: Maybe<Todos>;
  /** sum two numbers */
  mySum?: Maybe<SampleOutput>;
  /** update data of the table: "todo_attachments" */
  update_todo_attachments?: Maybe<Todo_Attachments_Mutation_Response>;
  /** update single row of the table: "todo_attachments" */
  update_todo_attachments_by_pk?: Maybe<Todo_Attachments>;
  /** update data of the table: "todos" */
  update_todos?: Maybe<Todos_Mutation_Response>;
  /** update single row of the table: "todos" */
  update_todos_by_pk?: Maybe<Todos>;
};


/** mutation root */
export type Mutation_RootDelete_Todo_AttachmentsArgs = {
  where: Todo_Attachments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todo_Attachments_By_PkArgs = {
  attachment_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TodosArgs = {
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todos_By_PkArgs = {
  t: Scalars['timestamp'];
  todo_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Todo_AttachmentsArgs = {
  objects: Array<Todo_Attachments_Insert_Input>;
  on_conflict?: Maybe<Todo_Attachments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todo_Attachments_OneArgs = {
  object: Todo_Attachments_Insert_Input;
  on_conflict?: Maybe<Todo_Attachments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TodosArgs = {
  objects: Array<Todos_Insert_Input>;
  on_conflict?: Maybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todos_OneArgs = {
  object: Todos_Insert_Input;
  on_conflict?: Maybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootMySumArgs = {
  arg1: SampleInput;
};


/** mutation root */
export type Mutation_RootUpdate_Todo_AttachmentsArgs = {
  _inc?: Maybe<Todo_Attachments_Inc_Input>;
  _set?: Maybe<Todo_Attachments_Set_Input>;
  where: Todo_Attachments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todo_Attachments_By_PkArgs = {
  _inc?: Maybe<Todo_Attachments_Inc_Input>;
  _set?: Maybe<Todo_Attachments_Set_Input>;
  pk_columns: Todo_Attachments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TodosArgs = {
  _inc?: Maybe<Todos_Inc_Input>;
  _set?: Maybe<Todos_Set_Input>;
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todos_By_PkArgs = {
  _inc?: Maybe<Todos_Inc_Input>;
  _set?: Maybe<Todos_Set_Input>;
  pk_columns: Todos_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "latest_todos" */
  latest_todos: Array<Latest_Todos>;
  /** fetch aggregated fields from the table: "latest_todos" */
  latest_todos_aggregate: Latest_Todos_Aggregate;
  /** fetch data from the table: "todo_attachments" */
  todo_attachments: Array<Todo_Attachments>;
  /** fetch aggregated fields from the table: "todo_attachments" */
  todo_attachments_aggregate: Todo_Attachments_Aggregate;
  /** fetch data from the table: "todo_attachments" using primary key columns */
  todo_attachments_by_pk?: Maybe<Todo_Attachments>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
};


export type Query_RootLatest_TodosArgs = {
  distinct_on?: Maybe<Array<Latest_Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Latest_Todos_Order_By>>;
  where?: Maybe<Latest_Todos_Bool_Exp>;
};


export type Query_RootLatest_Todos_AggregateArgs = {
  distinct_on?: Maybe<Array<Latest_Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Latest_Todos_Order_By>>;
  where?: Maybe<Latest_Todos_Bool_Exp>;
};


export type Query_RootTodo_AttachmentsArgs = {
  distinct_on?: Maybe<Array<Todo_Attachments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Attachments_Order_By>>;
  where?: Maybe<Todo_Attachments_Bool_Exp>;
};


export type Query_RootTodo_Attachments_AggregateArgs = {
  distinct_on?: Maybe<Array<Todo_Attachments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Attachments_Order_By>>;
  where?: Maybe<Todo_Attachments_Bool_Exp>;
};


export type Query_RootTodo_Attachments_By_PkArgs = {
  attachment_id: Scalars['Int'];
};


export type Query_RootTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


export type Query_RootTodos_AggregateArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


export type Query_RootTodos_By_PkArgs = {
  t: Scalars['timestamp'];
  todo_id: Scalars['Int'];
};

export type SampleInput = {
  a: Scalars['Int'];
  b: Scalars['Int'];
};

export type SampleOutput = {
  __typename?: 'SampleOutput';
  c: Scalars['Int'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "latest_todos" */
  latest_todos: Array<Latest_Todos>;
  /** fetch aggregated fields from the table: "latest_todos" */
  latest_todos_aggregate: Latest_Todos_Aggregate;
  /** fetch data from the table: "todo_attachments" */
  todo_attachments: Array<Todo_Attachments>;
  /** fetch aggregated fields from the table: "todo_attachments" */
  todo_attachments_aggregate: Todo_Attachments_Aggregate;
  /** fetch data from the table: "todo_attachments" using primary key columns */
  todo_attachments_by_pk?: Maybe<Todo_Attachments>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
};


export type Subscription_RootLatest_TodosArgs = {
  distinct_on?: Maybe<Array<Latest_Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Latest_Todos_Order_By>>;
  where?: Maybe<Latest_Todos_Bool_Exp>;
};


export type Subscription_RootLatest_Todos_AggregateArgs = {
  distinct_on?: Maybe<Array<Latest_Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Latest_Todos_Order_By>>;
  where?: Maybe<Latest_Todos_Bool_Exp>;
};


export type Subscription_RootTodo_AttachmentsArgs = {
  distinct_on?: Maybe<Array<Todo_Attachments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Attachments_Order_By>>;
  where?: Maybe<Todo_Attachments_Bool_Exp>;
};


export type Subscription_RootTodo_Attachments_AggregateArgs = {
  distinct_on?: Maybe<Array<Todo_Attachments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Attachments_Order_By>>;
  where?: Maybe<Todo_Attachments_Bool_Exp>;
};


export type Subscription_RootTodo_Attachments_By_PkArgs = {
  attachment_id: Scalars['Int'];
};


export type Subscription_RootTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


export type Subscription_RootTodos_AggregateArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


export type Subscription_RootTodos_By_PkArgs = {
  t: Scalars['timestamp'];
  todo_id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "todo_attachments" */
export type Todo_Attachments = {
  __typename?: 'todo_attachments';
  attachment_content: Scalars['String'];
  attachment_id: Scalars['Int'];
  todo_id: Scalars['Int'];
};

/** aggregated selection of "todo_attachments" */
export type Todo_Attachments_Aggregate = {
  __typename?: 'todo_attachments_aggregate';
  aggregate?: Maybe<Todo_Attachments_Aggregate_Fields>;
  nodes: Array<Todo_Attachments>;
};

/** aggregate fields of "todo_attachments" */
export type Todo_Attachments_Aggregate_Fields = {
  __typename?: 'todo_attachments_aggregate_fields';
  avg?: Maybe<Todo_Attachments_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Todo_Attachments_Max_Fields>;
  min?: Maybe<Todo_Attachments_Min_Fields>;
  stddev?: Maybe<Todo_Attachments_Stddev_Fields>;
  stddev_pop?: Maybe<Todo_Attachments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Todo_Attachments_Stddev_Samp_Fields>;
  sum?: Maybe<Todo_Attachments_Sum_Fields>;
  var_pop?: Maybe<Todo_Attachments_Var_Pop_Fields>;
  var_samp?: Maybe<Todo_Attachments_Var_Samp_Fields>;
  variance?: Maybe<Todo_Attachments_Variance_Fields>;
};


/** aggregate fields of "todo_attachments" */
export type Todo_Attachments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Todo_Attachments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Todo_Attachments_Avg_Fields = {
  __typename?: 'todo_attachments_avg_fields';
  attachment_id?: Maybe<Scalars['Float']>;
  todo_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "todo_attachments". All fields are combined with a logical 'AND'. */
export type Todo_Attachments_Bool_Exp = {
  _and?: Maybe<Array<Todo_Attachments_Bool_Exp>>;
  _not?: Maybe<Todo_Attachments_Bool_Exp>;
  _or?: Maybe<Array<Todo_Attachments_Bool_Exp>>;
  attachment_content?: Maybe<String_Comparison_Exp>;
  attachment_id?: Maybe<Int_Comparison_Exp>;
  todo_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "todo_attachments" */
export enum Todo_Attachments_Constraint {
  /** unique or primary key constraint */
  TodoAttachmentsPkey = 'todo_attachments_pkey'
}

/** input type for incrementing numeric columns in table "todo_attachments" */
export type Todo_Attachments_Inc_Input = {
  attachment_id?: Maybe<Scalars['Int']>;
  todo_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "todo_attachments" */
export type Todo_Attachments_Insert_Input = {
  attachment_content?: Maybe<Scalars['String']>;
  attachment_id?: Maybe<Scalars['Int']>;
  todo_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Todo_Attachments_Max_Fields = {
  __typename?: 'todo_attachments_max_fields';
  attachment_content?: Maybe<Scalars['String']>;
  attachment_id?: Maybe<Scalars['Int']>;
  todo_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Todo_Attachments_Min_Fields = {
  __typename?: 'todo_attachments_min_fields';
  attachment_content?: Maybe<Scalars['String']>;
  attachment_id?: Maybe<Scalars['Int']>;
  todo_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "todo_attachments" */
export type Todo_Attachments_Mutation_Response = {
  __typename?: 'todo_attachments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Todo_Attachments>;
};

/** on conflict condition type for table "todo_attachments" */
export type Todo_Attachments_On_Conflict = {
  constraint: Todo_Attachments_Constraint;
  update_columns?: Array<Todo_Attachments_Update_Column>;
  where?: Maybe<Todo_Attachments_Bool_Exp>;
};

/** Ordering options when selecting data from "todo_attachments". */
export type Todo_Attachments_Order_By = {
  attachment_content?: Maybe<Order_By>;
  attachment_id?: Maybe<Order_By>;
  todo_id?: Maybe<Order_By>;
};

/** primary key columns input for table: todo_attachments */
export type Todo_Attachments_Pk_Columns_Input = {
  attachment_id: Scalars['Int'];
};

/** select columns of table "todo_attachments" */
export enum Todo_Attachments_Select_Column {
  /** column name */
  AttachmentContent = 'attachment_content',
  /** column name */
  AttachmentId = 'attachment_id',
  /** column name */
  TodoId = 'todo_id'
}

/** input type for updating data in table "todo_attachments" */
export type Todo_Attachments_Set_Input = {
  attachment_content?: Maybe<Scalars['String']>;
  attachment_id?: Maybe<Scalars['Int']>;
  todo_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Todo_Attachments_Stddev_Fields = {
  __typename?: 'todo_attachments_stddev_fields';
  attachment_id?: Maybe<Scalars['Float']>;
  todo_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Todo_Attachments_Stddev_Pop_Fields = {
  __typename?: 'todo_attachments_stddev_pop_fields';
  attachment_id?: Maybe<Scalars['Float']>;
  todo_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Todo_Attachments_Stddev_Samp_Fields = {
  __typename?: 'todo_attachments_stddev_samp_fields';
  attachment_id?: Maybe<Scalars['Float']>;
  todo_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Todo_Attachments_Sum_Fields = {
  __typename?: 'todo_attachments_sum_fields';
  attachment_id?: Maybe<Scalars['Int']>;
  todo_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "todo_attachments" */
export enum Todo_Attachments_Update_Column {
  /** column name */
  AttachmentContent = 'attachment_content',
  /** column name */
  AttachmentId = 'attachment_id',
  /** column name */
  TodoId = 'todo_id'
}

/** aggregate var_pop on columns */
export type Todo_Attachments_Var_Pop_Fields = {
  __typename?: 'todo_attachments_var_pop_fields';
  attachment_id?: Maybe<Scalars['Float']>;
  todo_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Todo_Attachments_Var_Samp_Fields = {
  __typename?: 'todo_attachments_var_samp_fields';
  attachment_id?: Maybe<Scalars['Float']>;
  todo_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Todo_Attachments_Variance_Fields = {
  __typename?: 'todo_attachments_variance_fields';
  attachment_id?: Maybe<Scalars['Float']>;
  todo_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "todos" */
export type Todos = {
  __typename?: 'todos';
  created_at: Scalars['timestamptz'];
  done: Scalars['Boolean'];
  is_deleted: Scalars['Boolean'];
  t: Scalars['timestamp'];
  text: Scalars['String'];
  todo_id: Scalars['Int'];
};

/** aggregated selection of "todos" */
export type Todos_Aggregate = {
  __typename?: 'todos_aggregate';
  aggregate?: Maybe<Todos_Aggregate_Fields>;
  nodes: Array<Todos>;
};

/** aggregate fields of "todos" */
export type Todos_Aggregate_Fields = {
  __typename?: 'todos_aggregate_fields';
  avg?: Maybe<Todos_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Todos_Max_Fields>;
  min?: Maybe<Todos_Min_Fields>;
  stddev?: Maybe<Todos_Stddev_Fields>;
  stddev_pop?: Maybe<Todos_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Todos_Stddev_Samp_Fields>;
  sum?: Maybe<Todos_Sum_Fields>;
  var_pop?: Maybe<Todos_Var_Pop_Fields>;
  var_samp?: Maybe<Todos_Var_Samp_Fields>;
  variance?: Maybe<Todos_Variance_Fields>;
};


/** aggregate fields of "todos" */
export type Todos_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Todos_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Todos_Avg_Fields = {
  __typename?: 'todos_avg_fields';
  todo_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type Todos_Bool_Exp = {
  _and?: Maybe<Array<Todos_Bool_Exp>>;
  _not?: Maybe<Todos_Bool_Exp>;
  _or?: Maybe<Array<Todos_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  done?: Maybe<Boolean_Comparison_Exp>;
  is_deleted?: Maybe<Boolean_Comparison_Exp>;
  t?: Maybe<Timestamp_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  todo_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "todos" */
export enum Todos_Constraint {
  /** unique or primary key constraint */
  TodosPkey = 'todos_pkey'
}

/** input type for incrementing numeric columns in table "todos" */
export type Todos_Inc_Input = {
  todo_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "todos" */
export type Todos_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  done?: Maybe<Scalars['Boolean']>;
  is_deleted?: Maybe<Scalars['Boolean']>;
  t?: Maybe<Scalars['timestamp']>;
  text?: Maybe<Scalars['String']>;
  todo_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Todos_Max_Fields = {
  __typename?: 'todos_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  t?: Maybe<Scalars['timestamp']>;
  text?: Maybe<Scalars['String']>;
  todo_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Todos_Min_Fields = {
  __typename?: 'todos_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  t?: Maybe<Scalars['timestamp']>;
  text?: Maybe<Scalars['String']>;
  todo_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "todos" */
export type Todos_Mutation_Response = {
  __typename?: 'todos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Todos>;
};

/** on conflict condition type for table "todos" */
export type Todos_On_Conflict = {
  constraint: Todos_Constraint;
  update_columns?: Array<Todos_Update_Column>;
  where?: Maybe<Todos_Bool_Exp>;
};

/** Ordering options when selecting data from "todos". */
export type Todos_Order_By = {
  created_at?: Maybe<Order_By>;
  done?: Maybe<Order_By>;
  is_deleted?: Maybe<Order_By>;
  t?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  todo_id?: Maybe<Order_By>;
};

/** primary key columns input for table: todos */
export type Todos_Pk_Columns_Input = {
  t: Scalars['timestamp'];
  todo_id: Scalars['Int'];
};

/** select columns of table "todos" */
export enum Todos_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Done = 'done',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  T = 't',
  /** column name */
  Text = 'text',
  /** column name */
  TodoId = 'todo_id'
}

/** input type for updating data in table "todos" */
export type Todos_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  done?: Maybe<Scalars['Boolean']>;
  is_deleted?: Maybe<Scalars['Boolean']>;
  t?: Maybe<Scalars['timestamp']>;
  text?: Maybe<Scalars['String']>;
  todo_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Todos_Stddev_Fields = {
  __typename?: 'todos_stddev_fields';
  todo_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Todos_Stddev_Pop_Fields = {
  __typename?: 'todos_stddev_pop_fields';
  todo_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Todos_Stddev_Samp_Fields = {
  __typename?: 'todos_stddev_samp_fields';
  todo_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Todos_Sum_Fields = {
  __typename?: 'todos_sum_fields';
  todo_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "todos" */
export enum Todos_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Done = 'done',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  T = 't',
  /** column name */
  Text = 'text',
  /** column name */
  TodoId = 'todo_id'
}

/** aggregate var_pop on columns */
export type Todos_Var_Pop_Fields = {
  __typename?: 'todos_var_pop_fields';
  todo_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Todos_Var_Samp_Fields = {
  __typename?: 'todos_var_samp_fields';
  todo_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Todos_Variance_Fields = {
  __typename?: 'todos_variance_fields';
  todo_id?: Maybe<Scalars['Float']>;
};


export const UpdateTodoDocument = gql`
    mutation UpdateTodo($todo_id: Int!, $done: Boolean!, $text: String!) {
  insert_todos_one(object: {done: $done, todo_id: $todo_id, text: $text}) {
    t
  }
}
    `;

export function useUpdateTodoMutation() {
  return Urql.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument);
};
export const AddTodoDocument = gql`
    mutation AddTodo($text: String!) {
  insert_todos_one(object: {text: $text}) {
    t
  }
}
    `;

export function useAddTodoMutation() {
  return Urql.useMutation<AddTodoMutation, AddTodoMutationVariables>(AddTodoDocument);
};
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($todo_id: Int!) {
  insert_todos_one(object: {todo_id: $todo_id, text: "", is_deleted: true}) {
    t
  }
}
    `;

export function useDeleteTodoMutation() {
  return Urql.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument);
};
export const AllTodosDocument = gql`
    query AllTodos {
  latest_todos {
    todo_id
    text
    done
    created_at
  }
}
    `;

export function useAllTodosQuery(options: Omit<Urql.UseQueryArgs<AllTodosQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AllTodosQuery>({ query: AllTodosDocument, ...options });
};
export const TodosDocument = gql`
    subscription Todos {
  latest_todos(order_by: {todo_id: asc}) {
    todo_id
    text
    created_at
    done
  }
}
    `;

export function useTodosSubscription<TData = TodosSubscription>(options: Omit<Urql.UseSubscriptionArgs<TodosSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<TodosSubscription, TData>) {
  return Urql.useSubscription<TodosSubscription, TData, TodosSubscriptionVariables>({ query: TodosDocument, ...options }, handler);
};