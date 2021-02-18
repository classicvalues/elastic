Search.setIndex({docnames:["agent","customization","distributed","errors","events","examples","index","kubernetes","metrics","multiprocessing","quickstart","rendezvous","runtime","timer","train_script","tsm_driver"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["agent.rst","customization.rst","distributed.rst","errors.rst","events.rst","examples.rst","index.rst","kubernetes.rst","metrics.rst","multiprocessing.rst","quickstart.rst","rendezvous.rst","runtime.rst","timer.rst","train_script.rst","tsm_driver.rst"],objects:{"torchelastic.agent":{server:[0,0,0,"-"]},"torchelastic.agent.server":{ElasticAgent:[0,1,1,""],SimpleElasticAgent:[0,1,1,""],Worker:[0,1,1,""],WorkerGroup:[0,1,1,""],WorkerSpec:[0,1,1,""],WorkerState:[0,1,1,""]},"torchelastic.agent.server.ElasticAgent":{get_worker_group:[0,2,1,""],run:[0,2,1,""]},"torchelastic.agent.server.SimpleElasticAgent":{_assign_worker_ranks:[0,2,1,""],_exit_barrier:[0,2,1,""],_initialize_workers:[0,2,1,""],_monitor_workers:[0,2,1,""],_rendezvous:[0,2,1,""],_restart_workers:[0,2,1,""],_shutdown:[0,2,1,""],_start_workers:[0,2,1,""],_stop_workers:[0,2,1,""],get_worker_group:[0,2,1,""],run:[0,2,1,""]},"torchelastic.agent.server.WorkerSpec":{get_entrypoint_name:[0,2,1,""]},"torchelastic.agent.server.WorkerState":{is_running:[0,2,1,""]},"torchelastic.agent.server.api":{RunResult:[0,1,1,""]},"torchelastic.agent.server.local_elastic_agent":{LocalElasticAgent:[0,1,1,""]},"torchelastic.distributed":{launch:[2,0,0,"-"]},"torchelastic.events":{get_logging_handler:[4,4,1,""],record:[4,4,1,""]},"torchelastic.events.api":{Event:[4,1,1,""],EventMetadataValue:[4,3,1,""],EventSource:[4,1,1,""]},"torchelastic.metrics":{configure:[8,4,1,""],prof:[8,4,1,""],put_metric:[8,4,1,""]},"torchelastic.metrics.api":{ConsoleMetricHandler:[8,1,1,""],MetricHandler:[8,1,1,""],NullMetricHandler:[8,1,1,""]},"torchelastic.multiprocessing":{errors:[3,0,0,"-"],start_processes:[9,4,1,""]},"torchelastic.multiprocessing.api":{MultiprocessContext:[9,1,1,""],PContext:[9,1,1,""],RunProcsResult:[9,1,1,""],SubprocessContext:[9,1,1,""]},"torchelastic.multiprocessing.errors":{ChildFailedError:[3,1,1,""],ErrorHandler:[3,1,1,""],ProcessFailure:[3,1,1,""],record:[3,4,1,""]},"torchelastic.rendezvous":{RendezvousClosedException:[11,1,1,""],RendezvousHandler:[11,1,1,""],RendezvousNonRetryableError:[11,1,1,""],RendezvousTimeoutException:[11,1,1,""]},"torchelastic.rendezvous.RendezvousHandler":{get_backend:[11,2,1,""],get_run_id:[11,2,1,""],is_closed:[11,2,1,""],next_rendezvous:[11,2,1,""],num_nodes_waiting:[11,2,1,""],set_closed:[11,2,1,""],shutdown:[11,2,1,""]},"torchelastic.rendezvous.etcd_rendezvous":{EtcdRendezvous:[11,1,1,""],EtcdRendezvousHandler:[11,1,1,""],EtcdStore:[11,1,1,""]},"torchelastic.rendezvous.etcd_rendezvous.EtcdRendezvous":{announce_self_waiting:[11,2,1,""],confirm_membership:[11,2,1,""],confirm_phase:[11,2,1,""],handle_existing_rendezvous:[11,2,1,""],handle_join_last_call:[11,2,1,""],init_phase:[11,2,1,""],join_phase:[11,2,1,""],join_rendezvous:[11,2,1,""],rendezvous_barrier:[11,2,1,""],set_closed:[11,2,1,""],try_create_rendezvous:[11,2,1,""],wait_for_final:[11,2,1,""],wait_for_peers:[11,2,1,""],wait_for_rendezvous_to_free:[11,2,1,""]},"torchelastic.rendezvous.etcd_rendezvous.EtcdStore":{add:[11,2,1,""],check:[11,2,1,""],get:[11,2,1,""],set:[11,2,1,""],set_timeout:[11,2,1,""],wait:[11,2,1,""]},"torchelastic.rendezvous.etcd_server":{EtcdServer:[11,1,1,""]},"torchelastic.timer":{LocalTimerClient:[13,1,1,""],LocalTimerServer:[13,1,1,""],TimerClient:[13,1,1,""],TimerRequest:[13,1,1,""],TimerServer:[13,1,1,""],configure:[13,4,1,""],expires:[13,4,1,""]},"torchelastic.timer.TimerClient":{acquire:[13,2,1,""],release:[13,2,1,""]},"torchelastic.timer.TimerServer":{clear_timers:[13,2,1,""],get_expired_timers:[13,2,1,""],register_timers:[13,2,1,""]},"torchelastic.tsm":{driver:[15,0,0,"-"]},"torchelastic.tsm.driver.api":{Application:[15,1,1,""],Container:[15,1,1,""],ElasticRole:[15,1,1,""],Resource:[15,1,1,""],RetryPolicy:[15,1,1,""],Role:[15,1,1,""],Scheduler:[15,1,1,""],Session:[15,1,1,""],macros:[15,1,1,""]},"torchelastic.tsm.driver.api.Scheduler":{cancel:[15,2,1,""],describe:[15,2,1,""],exists:[15,2,1,""],log_iter:[15,2,1,""],run_opts:[15,2,1,""],schedule:[15,2,1,""],submit:[15,2,1,""],submit_dryrun:[15,2,1,""]},"torchelastic.tsm.driver.api.Session":{describe:[15,2,1,""],dryrun:[15,2,1,""],list:[15,2,1,""],log_lines:[15,2,1,""],name:[15,2,1,""],run:[15,2,1,""],run_opts:[15,2,1,""],schedule:[15,2,1,""],scheduler_backends:[15,2,1,""],status:[15,2,1,""],stop:[15,2,1,""],wait:[15,2,1,""]},"torchelastic.tsm.driver.local_scheduler":{LocalScheduler:[15,1,1,""]},"torchelastic.tsm.driver.local_scheduler.LocalScheduler":{describe:[15,2,1,""],log_iter:[15,2,1,""],run_opts:[15,2,1,""],schedule:[15,2,1,""]},torchelastic:{agent:[0,0,0,"-"],distributed:[2,0,0,"-"],events:[4,0,0,"-"],metrics:[8,0,0,"-"],multiprocessing:[9,0,0,"-"],rendezvous:[11,0,0,"-"],timer:[13,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function"},terms:{"032":5,"0rc":12,"100":15,"1024":15,"1234":11,"127":10,"1574213883":8,"1574213940":8,"200":5,"2020":5,"2379":[5,10,11],"300":0,"30s":11,"4001":10,"4182858":8,"500":15,"50th":15,"5237644":8,"582":5,"600":11,"8080":15,"8081":15,"922":5,"929":5,"abstract":[0,11,13,15],"break":15,"byte":11,"case":[0,1,3,5,11,13,14],"catch":3,"class":[0,1,4,8,9,11,13,15],"default":[0,1,4,5,8,9,11,15],"export":[5,14],"final":[0,11,15],"float":[0,4,13],"function":[0,2,3,5,8,9,11,15],"import":[1,2,4,8,9,13,15],"int":[0,3,4,8,9,11,15],"long":[11,15],"new":[0,2,5,11,15],"null":[1,8],"return":[0,1,9,11,13,15],"short":[9,11,15],"static":0,"true":[0,13,15],"try":[1,3,8,11],"var":[3,9,11,14],"while":[5,11,15],AWS:1,For:[0,2,5,8,9,11,14,15],Has:15,NOT:[0,2,11,13,15],Not:15,ONE:10,Such:11,That:[0,2,9,15],The:[0,1,2,3,4,5,8,9,10,11,12,13,15],There:11,Use:[0,11,15],Used:[2,11],Useful:[3,11,15],Uses:11,Using:[3,8],__getitem__:15,__main__:[1,3],__name__:[1,3],__qualname__:0,_assign_worker_rank:0,_exit_barri:0,_initialize_work:0,_monitor_work:0,_rendezv:0,_restart_work:0,_shutdown:0,_start_work:0,_stop_work:0,abc:15,abl:11,about:[0,2,3,8,10,15],abov:[3,11,13,15],abstractmethod:15,abus:15,access:15,accord:0,account:9,accur:3,accuraci:15,acquir:13,acquisit:13,across:[0,2],act:[0,9,15],action:[0,4,15],activ:13,actual:[0,3,15],add:[8,11],added:8,adding:8,addit:[2,4,11,15],admit:[2,11],admitt:15,advanc:[0,6],advertis:10,advis:0,after:[11,13,15],again:0,against:0,agent:[1,2,3,4,6,8,10,13,15],aggreg:3,agre:11,algorithm:0,aliv:[0,11],all:[0,2,3,5,8,9,10,11,13,14,15],all_reduc:13,alloc:[0,11],allow:[0,1,2,11,15],along:3,alreadi:[11,15],also:[5,8,11,15],altern:5,alwai:[9,13,15],amount:[0,11],ani:[0,2,3,4,5,9,11,13,15],annot:[3,9,15],announc:11,announce_self_wait:11,another_arg:15,anti:15,anymor:15,anyth:3,api:[0,1,2,3,5,6,8,9,10,11,13],app:15,app_handl:15,app_id:15,app_statu:15,appdryruninfo:15,appli:[0,2,3],applic:[5,11],appnotrerunnableexcept:15,appropri:5,approxim:11,appstatu:15,arbitrari:15,arch:5,arg1:[2,9,10],arg:[0,1,2,9,10,13,14,15],argument:[0,2,9,14,15],argv:[1,14],arrai:0,arriv:[2,11],aspect:5,assgin:2,assign:[0,2,11,15],associ:4,assum:[0,2,3,11],assumpt:[2,8,15],atom:11,attach:15,attempt:[2,5,11],automat:[2,11,15],avail:[0,2,5,11,15],avoid:[5,9],back:[11,15],backend:[2,11,14,15],ball:15,bar0:9,bar1:9,bar:[8,15],bare:5,barrier:[0,11],base:[0,3,5,9,11,15],basecontext:13,basic:[11,15],batch:[2,5,14],baz:8,becaus:[3,11,15],becom:11,been:[3,11,14,15],befor:[1,2,5,8,11,13,15],begin:[1,11,15],behav:15,behavior:[2,3,9,15],being:[0,3,5,11,13],belong:[8,15],below:[0,1,5,8,11,12,13,14,15],best:[11,15],better:0,between:[2,5,11,13,15],bin:[0,9,11],binari:[0,3,9,11],bitmask:9,bitnami:5,block:[11,13,15],blueprint:0,bone:5,bool:[0,4,11,13],both:[2,3,9,11],bound:15,box:[2,5,15],buffer_s:15,build:15,built:[3,5,15],bundl:15,c10:11,c10d:[0,2,11],cache_s:15,calcul:8,calculate_lat:8,call:[0,11,13,15],callabl:[0,9],caller:[0,11,15],can:[0,1,2,3,4,5,8,9,10,11,13,15],cancel:15,cannot:[3,15],canon:[0,3],capabl:15,care:5,cast:9,categor:3,categori:3,caus:[3,11],caution:9,caveat:15,certain:[8,9,15],cfg:15,chang:[0,2,11,15],check:[0,11,15],checkpoint:[2,14],checkpoint_path:[2,14],child:3,childfailederror:3,children:3,chose:0,class_nam:8,classif:5,classnam:8,classy_train:5,classy_vis:5,clean:0,clear:13,clear_tim:13,client:[10,11,15],clone:5,close:11,cloud:6,cloudwatch:1,cluster:[2,11,12,15],cmd:[9,15],code:[0,2,13,15],collect:[0,11],com:5,combin:11,come:[8,11],command:[0,2,5,9,15],commandlin:15,common:[0,11],commun:[0,5,11,13],compat:0,complet:[0,1,9,11,13,15],complianc:15,compliant:14,compos:5,compris:2,comput:[0,3],concis:3,conclud:11,concret:14,config:[5,15],config_fil:5,configur:[0,1,2,8,11,13,15],confirm:11,confirm_membership:11,confirm_phas:11,connect:11,consid:[0,11,15],consist:[2,11],consol:[0,4,8,9],consolemetrichandl:8,consolemetricshandl:8,constitut:15,consum:15,contain:[0,2,3,4,9],content:3,context:[0,2,11,13],continu:14,contrast:0,control:[0,5,7,11,12,15],conveni:[8,11],coordin:[0,15],copi:[0,9,15],copy_error_fil:3,core:15,correct:11,correl:2,could:[0,11,15],count:[8,15],countdown:13,counter:11,cpu:15,crash:[3,11,15],creat:[0,1,2,5,9,11,15],critic:11,cross:0,ctx:9,cumbersom:11,current:[0,2,3,11,15],cursor:15,custom:[3,5,6,7,8,10,15],custom_schedul:15,daemon:13,data:[0,4,5,8,11,13,15],data_dir:11,dataset:[2,14],datetim:[11,15],deadlin:[11,13],deal:[0,13,15],debug:8,decentr:0,decid:11,decis:[0,11,13],decor:[3,8],def:[0,1,2,3,8,9,11,13,14],def_nam:8,defens:0,defin:[0,1,2,9,11,15],definit:[2,7,15],delai:11,deleg:0,departur:[2,15],depend:[0,2,5,13,15],deploi:[0,5,11,15],deploy:[0,2,11,15],deployment_prefer:15,deprec:[0,6],describ:[0,1,9,11,15],describeapprespons:15,descript:[3,11,15],design:[8,11],destin:[4,8],destroi:11,detail:0,detect:[0,3,11],determin:[0,9],dev:[1,5,8,15],devic:[5,13],diagnost:3,diagram:[0,11],dict:[0,3,4,9,13,15],dictat:15,did:11,differ:[0,1,2,3,5,8,9,11,14,15],dir:15,direct:15,directli:[0,10,15],directori:[9,15],disambigu:9,discourag:15,discoveri:11,dist:2,distribut:[0,2,3,5,6,10,11,13,14,15],doc:[11,15],docker:15,dockerfil:5,doe:[0,3,5,8,10,11,13,15],doing:[3,11],domain:3,don:10,done:[0,9,15],doubl:0,down:[0,2,9],downstream:15,driver:15,dry:15,dryrun:15,dryrun_info:15,due:11,durat:[8,11,15],dure:[0,1,4,11,15],duti:15,each:[0,2,3,5,9,13,14,15],earli:0,easi:11,echo:9,effect:[13,15],either:[0,3,5,9,11,13,15],elast:[1,5,6,7,10,12,14,15],elastic_ag:1,elastic_train:15,elasticag:0,elasticrol:15,elig:13,els:[0,1,11],emit:[1,8],empti:[0,9,11,15],enabl:[2,10],encod:[0,8],encount:15,encourag:[0,12,15],end:[3,5,8,15],endpoint:[2,11],enforc:15,enough:5,ensur:[0,11,14,15],entir:[0,2,5,15],entiti:13,entri:[2,9,11],entrypoint:[0,3,9,15],env:[3,9,11,14,15],env_var:15,environ:[0,2,3,5,9,11,14,15],epoch:[3,5,14,15],equal:[2,11,13],equival:[3,15],err:9,error:[0,6,9,11],error_fil:[3,9],error_handl:3,errorhandl:3,especi:5,essenti:0,establish:5,etc:[0,11,15],etcd:[2,5,10,14],etcd_address:11,etcd_binary_path:11,etcd_client:11,etcd_host:[2,10],etcd_port:[2,10],etcd_prefix:11,etcd_rendezv:11,etcd_serv:11,etcd_store_prefix:11,etcdrendezv:[2,11],etcdrendezvoushandl:11,etcdrendezvousretryablefailur:11,etcdserv:11,etcdstor:11,even:0,event:[0,6],eventhandl:1,eventmetadatavalu:4,eventsourc:4,eventu:[11,15],everi:[0,11],everyon:[0,11],evict:15,exact:[0,13,15],exactli:13,exampl:[0,3,4,6,8,9,11,13,14,15],example_1:5,except:[0,1,3,8,15],exchang:11,exclud:11,exclus:[0,11],execut:[0,1,2,4,15],exhaust:15,exist:[0,2,3,9,11,15],exit:[0,11,15],exit_barrier_timeout:0,exit_cod:0,exitcod:3,expect:[0,9,11,13,15],expected_vers:11,experi:15,experiment:[11,15],experiment_nam:15,expir:[6,11],expiration_tim:13,expiri:13,explan:3,explicitli:3,expos:15,expositori:14,extend:[1,13],extent:15,face:15,factori:[0,4,9,15],fail:[0,1,2,3,9,11,14,15],failur:[0,1,2,3,5,8,9,11,14,15],fallback:11,fals:[0,15],far:2,fashion:13,fault:[0,2,6,10,11],featur:15,fetch:15,few:[0,15],field:[0,3,8,9,15],file1:9,file2:9,file:[0,3,5,9,11,15],filter:15,find:11,finish:[0,8,9,11,13],first:[0,3,8,11,15],fit:[1,15],fix:[0,2,11],flag:[5,14],fn_arg:1,follow:[0,2,8,9,10,11,15],foo:[8,9,15],foobar:[0,3,8,9,15],fork:9,forkserv:9,form:[2,11],format:[2,3,15],fqdn:2,framework:[5,8],free:[0,11],frequenc:2,fresh:0,from:[0,3,4,5,8,9,11,13,14,15],frozen:11,full:[11,14],fulli:15,further:5,furthermor:9,futur:[0,11,15],gang:2,gather:11,gener:[3,4,15],get:[2,11,13,14,15],get_backend:11,get_client:11,get_context:[0,13],get_entrypoint_nam:0,get_error_handl:3,get_events_logg:4,get_expired_tim:13,get_first_failur:3,get_logging_handl:4,get_run_id:11,get_worker_group:0,getpass:15,getus:15,git:5,github:[5,7,12],give:15,given:[0,9,11,13,15],global:[0,2],global_rank:0,gloo:2,goal:8,going:15,gpu:[0,5,13,15],gracefulli:[0,2,11],greater:11,group:[0,2,8,11,13,14],group_nam:8,group_rank:[0,2],group_result:0,group_world_s:0,guarante:[11,13,15],guard:0,handl:[0,1,2,3,11,15],handle_existing_rendezv:11,handle_join_last_cal:11,handler:[3,4,5],happen:[0,3,11],hard:2,hardwar:15,has:[0,3,8,11,13,14,15],have:[0,1,2,3,5,8,9,10,11,13,14,15],header:9,healthi:[0,11],hello:9,hello_elast:5,hello_world:15,help:[5,8,11,15],helper:11,henc:[0,11,14],here:[10,11],high:[0,5,8,15],highli:[5,11,12,15],hint:15,hold:[9,13],home:15,homogen:[0,2],honor:15,host:[0,2,3,10,13,15],how:[1,5,11,13,15],howev:[0,8,15],http:[5,10],human:9,hyper:15,idempot:15,identifi:[0,2,4,8,11,13,15],ids:15,ignor:[1,9,15],imag:[5,15],img_root:15,immedi:[2,11],implement:[1,2,5,8,9,11,15],implementor:[0,15],impli:11,implicitli:3,impos:13,includ:[8,11,15],inclus:15,incom:13,increas:8,increment:11,indefinit:15,independ:11,index:9,indic:11,info:[0,4,5,9,15],inform:[0,1,3,5,7,11,15],infra:3,infrastructur:[1,15],ing:[9,11],init:[0,3],init_phas:11,init_process_group:[0,2,14],initi:[0,2,3,11,14],input:3,insid:11,instal:[10,15],instanc:[0,2,5,8,11,13,15],instead:[0,5,8,11,15],instruct:[12,13,15],integ:[11,15],integr:4,intend:[11,15],intent:[9,11],intention:[0,5],inter:[0,3],interfac:[1,5,8,11,15],intermedi:11,intern:8,interpret:[0,11,13,15],interrup:0,interrupt:[0,15],introduc:15,invalid:[3,9,11,15],invok:[2,9,15],is_clos:11,is_fail:[0,1],is_run:0,is_termin:15,item:2,iter:[2,14,15],its:[0,1,11,13,15],itself:5,job:[0,2,3,4,5,7,8,10,11,12,13,15],job_id:[2,10,11],join:[2,5,11],join_phas:11,join_rendezv:11,joinabl:[5,11],json:[3,5,9],just:[0,9,15],keep:[0,11],keep_al:11,kei:[0,2,9,11],kept:5,keyset:9,kill:[2,13,15],kind:4,know:15,known:4,kubernet:[5,6,12],kwarg:15,languag:3,larg:5,last:[11,15],last_call_timeout:11,late:11,latenc:8,later:11,launch:[0,1,3,5,6,9,10,11,14,15],launch_kwarg:15,launcher:5,lead:15,leaf:8,leaf_modul:8,learn:10,leas:11,least:[5,10,11],leav:[0,2],left:15,less:[0,13],level:[0,1,3,5,8,15],librari:[9,13],like:[5,9,11,15],limit:15,line:15,list:[0,11,13,15],listen:10,live:15,load_checkpoint:[2,14],loader:5,local:[0,2,9,11,13,14,15],local_elastic_ag:0,local_rank:[0,2,3,9,14],local_runopt:15,local_schedul:15,local_world_s:[0,1,2],localelasticag:[0,1,13],localhost:[11,15],localschedul:15,localtimercli:13,localtimerserv:13,localworkergroup:2,locat:8,log:[0,3,4,8,9,15],log_dir:[0,9],log_it:15,log_lin:15,logic:[14,15],longer:13,look:[5,10,11],lookuperror:11,lose:[11,14],lost:[0,2,14,15],machin:[0,5],macro:15,made:[2,15],mai:[0,3,8,10,11,15],main:[0,1,2,3,5,9,11,13,14,15],make:[0,1,2,5,6,8,11,13,14],manag:[0,2,6,9,13],manger:11,mani:[11,15],manner:[0,15],manual:[2,9,11,14,15],map:[0,2,8,9,11,15],mark:11,mask:9,master_addr:[2,14],master_port:[0,2,14],match:11,matches_regex:15,max:[0,2,3,11,15],max_interv:13,max_nnod:2,max_nod:5,max_restart:[0,1,2,15],max_retri:15,max_siz:[2,10],max_work:11,maximum:[11,15],mean:[11,13,15],meaning:[0,3,4],meaningless:0,meant:[11,13,15],measur:8,mechan:[4,9,11],meet:[5,10],member:[0,2,11],membership:[0,2,11,15],memmb:15,messag:[3,13],message_queu:13,metadata:[3,4],method:[0,1,9,11,15],metric:[6,15],metric_data:[1,8],metric_group:8,metric_group_nam:8,metric_nam:8,metric_valu:8,metricdata:1,metrichandl:[1,8],might:11,millisecond:[4,8],min:[2,3,11],min_nod:5,min_siz:[2,10],min_work:11,minimum:[0,11],miss:[9,15],mode:[2,11,15],model:[14,15],model_accuraci:15,modul:[1,2,4,8,11,15],moment:15,monitor:[0,2,11,13],monitor_interv:[0,1],more:[0,1,5,7,10,11,13,15],most:[0,1,10,11,13,14],mp_queue:13,much:15,multi:[0,2,11,15],multi_contain:5,multipl:[3,5,11,13,15],multiprocess:[0,3,6,13],multiprocesscontext:9,must:[0,2,5,9,13,14,15],mutabl:0,mutual:0,my_app:8,my_contain:15,my_env_var:15,my_imag:15,my_launch:1,my_method:8,my_metr:8,my_modul:8,my_sess:15,my_train:15,my_train_job:15,my_train_script:15,myeventhandl:1,mymetrichandl:1,myrendezvoushandl:1,name:[0,3,4,8,9,15],nanni:3,nativ:15,nccl:2,necessari:[0,2,11,15],necessarili:[0,11],need:[1,2,3,5,9,11,14,15],neg:13,ness:2,net:0,network:[5,11],never:[2,11],next:[5,11],next_rendezv:11,nnode:[2,5,10,15],node:[0,2,3,10,11,15],non:[0,3,11,13,15],none:[0,3,4,8,9,11,13,15],noqa:11,nor:0,normal:11,note:[0,2,9,11,13,15],noth:[0,15],notic:2,notifi:2,notimplementederror:15,now:[5,8,13],nproc:9,nproc_per_nod:[1,2,5,10,15],nproc_per_process:0,nprocs_per_nod:15,nulleventhandl:1,nullmetrichandl:8,nullmetricshandl:8,num:11,num_cuda_devic:5,num_max_work:11,num_min_work:11,num_nod:[2,10],num_nodes_wait:11,num_replica:15,num_train:2,num_work:0,num_workers_wait:11,number:[0,2,5,9,11,15],nvidia:5,object:[0,3,5,11,13,15],observ:[0,11],obtain:3,occupi:5,occur:[3,4,11],off:0,offset:0,omp_num_thread:5,onc:[1,3,5,11],one:[0,3,5,8,9,11,13,14,15],onli:[0,2,5,9,11,12,15],onto:15,oom:5,open:11,oper:[8,9,11],opportun:11,optim:5,optimist:0,option:[0,3,4,5,9,10,11,14,15],origin:3,other:[0,3,8,9,11,15],other_param:[0,13],otherwis:[3,11,15],our:[2,5,7,10,12,14],ourselv:11,out:[2,5,8,9,15],output:[0,5,8,9,15],outsid:3,over:[0,9,15],overal:11,overload:5,overrid:[3,15],override_timeout:11,overview:8,overwrit:15,own:[1,5,11,13,15],p2p:11,packag:5,page:[5,14],pair:[11,13],parallel:[11,15],param:1,paramet:[0,4,9,11,15],parameter_serv:15,parent:[3,9,13,15],pars:[14,15],parse_accuraci:15,parse_arg:[1,14],part:11,partial:[0,11,15],particip:[2,5,11],particular:[0,2,8,11],particularli:13,pass:[0,1,2,3,5,8,9,10,11,13,14,15],past:15,path:[9,11,14,15],pattern:15,pcontext:9,peer:11,per:[0,2,3,11,13,15],perform:[0,5,11,15],period:11,persist:[11,15],phase:11,physic:[2,15],pid:[0,3,13],piggyback:11,pip:10,place:[0,11],placement:0,plai:15,plane:[0,11],platform:[1,3,8],pleas:[1,5,7,11,15],plug:15,plugin:6,point:[0,2,5,8,11,15],polici:[0,3,15],popen:9,popul:9,port:[0,2,11,15],port_map:15,possibl:[11,15],potenti:[11,13],power:10,pre:5,preced:0,preemption:15,prefer:[0,12,15],prefix:11,present:11,pretti:15,prevent:0,previous:11,primit:11,print:[0,1,8,9,15],prior:[0,15],problem:11,process:[0,1,2,3,4,5,11,13,14,15],processcontext:9,processfailur:[0,3,9],processgroup:5,prod:8,produc:[1,4,8,15],product:[5,11,15],prof:8,profil:8,program:[1,14,15],programmat:[1,15],progress:[0,2,14,15],propag:[6,11],proper:0,properli:[0,11],properti:[1,8,15],protocol:13,provid:[0,2,3,5,6,9,11,13,14,15],ps_main:15,public_hostnam:10,publish:[1,8,11],pull:15,purg:15,push:1,put:0,put_metr:8,python:[0,2,3,4,8,9,10,11,15],pytorch:[0,3,5,6,15],pytorch_read:15,pytorch_train:15,quad:0,qualifi:[8,15],queri:11,queue:[0,13],quickli:11,quickstart:[6,15],rais:[0,3,11,15],ram:15,ran:15,random:[0,11],rang:[2,11,14,15],rank:[0,2,9,11,14,15],rather:[0,3,13,15],ratio:0,raw:15,rdzv:[0,2],rdzv_backend:[2,5,10,14],rdzv_endpoint:[2,5,10,14],rdzv_handler:[0,1,11],rdzv_id:[2,5,10],rdzv_impl:11,rdzv_version:11,reach:[0,11,15],react:0,read:[0,3,15],readabl:9,reader:15,reader_main:15,reader_project_dir:15,readm:[7,12],realiti:15,reap:13,reason:15,recent:14,recommend:[0,2,5,11,15],reconstruct:15,record:[1,3,4,9,15],record_except:3,recov:0,redirect:[0,9],refer:[1,7,11,12,15],regard:15,regex:15,region:8,regist:[11,13],register_tim:13,regular:0,rel:15,relat:0,relationship:8,releas:[11,13,15],relev:[0,15],reli:[0,3],remain:11,remot:0,remov:[5,14,15],render:11,rendev:2,rendezv:[0,2,5,6,8,10,14],rendezvous_barri:11,rendezvousclosedexcept:11,rendezvoushandl:[0,1,2,11],rendezvousnonretryableerror:11,rendezvoustimeoutexcept:11,renew:11,replac:[2,15],replica:[9,15],replica_id:15,report:[3,15],repres:[0,3,4,11,13,15],represent:[9,11],request:[13,15],request_queu:13,requestqueu:13,requir:[0,5,10,15],reserv:8,resnet18:5,resourc:[0,7,11],respect:9,respons:[0,8,11,13,15],rest:5,restart:[0,2,14,15],result:[0,2,3,9,15],resum:11,retent:15,retri:[0,3,11,13,15],retriev:0,retry_polici:15,retryabl:11,retrypolici:15,return_valu:[0,1,9],role:[0,1,2,11],role_nam:15,role_rank:[0,2],role_world_s:[0,2],root:[3,11,15],rpm:15,run:[0,1,2,3,9,10,11,12,13,15],run_id:[2,11],run_opt:15,run_result:1,runconfig:15,runopt:15,runprocsresult:9,runresult:0,runtim:15,safe:[11,15],safeti:0,same:[0,2,5,8,9,11,13,14,15],save_checkpoint:[2,14],scaffold:0,scale:[0,2,15],scenario:11,schedul:[0,3],scheduler_backend:15,schedulerbackend:15,scheme:11,scope:13,scope_id:13,script:[0,2,3,5,6,10,13],script_arg:15,second:[0,3,13],section:[0,1,2,12,15],see:[1,5,11,14,15],seek:15,select:0,self:[0,1,8,13,15],semant:[2,11,15],sens:11,sensibl:8,separ:[5,11],server:[2,5,10,15],servic:[1,5,15],session:6,session_nam:15,sessionmismatchexcept:15,set:[0,3,5,9,11,13,14,15],set_clos:11,set_timeout:11,setup:[2,5,11,12],share:[2,5,11],shared_queu:0,ship:[1,15],shm:5,should:[0,1,2,3,5,9,11,13,15],should_checkpoint:2,show:5,shown:1,shutdown:11,side:[11,13],sidecar:[2,5,10,11],signal:11,signatur:3,similar:[2,5,8],simpl:[3,11,15],simpleelasticag:0,simplest:0,simpli:[2,3,5],sinc:[3,5,13,15],singl:[0,2,3,5,10,11,15],sink:[1,8],situat:13,size:[0,2,5,11],sleep:15,small:11,smallest:3,softwar:15,some:[0,2,3,11,13,15],someon:11,someth:5,soon:[11,15],sort:0,sourc:[0,1,3,4,8,9,11,13,15],span:5,sparingli:15,spawn:[0,1,9,13],spec:[0,1,13,15],special:3,specif:[0,9,11,13,15],specifi:[0,2,3,5,9,11,15],stabl:[2,11],stack:3,stage:8,standalon:[2,5,10,11,15],standard:[3,4,9],start:[0,2,5,8,10,11,13,15],start_method:[0,1,9,13],start_process:[3,9],start_work:0,state:[0,3,5,11,14,15],statu:[0,5,15],std:[0,9],stderr:[9,15],stdout:[8,9,15],stdoutmetrichandl:8,still:[0,11],stop:[0,2,11,15],stopiter:15,store:[0,2,11],str:[0,3,4,8,9,11,13,15],strategi:3,stream:[0,9],string:[0,8,9,11],strongli:[0,2],structur:[0,2,3],stuck:[0,13,15],style:2,sub:[3,15],subclass:[3,15],subject:15,submit:15,submit_dryrun:15,subprocess:[9,11,13],subprocesscontext:9,subset:2,substitut:[5,11,15],succe:11,succeed:0,success:[0,8],successfulli:[0,8,11,15],succinctli:8,suffici:[1,11],sugar:3,sum:0,superset:9,support:[1,2,3,6,15],sure:[1,2,14],surviv:[2,15],synchron:[0,11],syntact:3,sys:[1,14],system:5,tail:[9,15],take:[0,5,10,11,13,15],talk:13,tar:15,tarbal:15,tcp:2,tcp_store:15,tear:0,technic:11,tee:[0,9],tee_stderr:9,tee_stdout:9,telemetri:8,template_config:5,temporarili:0,tensorboard:15,term:[11,15],termin:[0,11,13,15],test:[2,9,11],test_ev:4,tha:2,than:[0,2,3,5,8,11,13,15],thei:[11,15],them:[1,8,11,13],themselv:11,therefor:9,thi:[0,1,2,3,5,9,11,13,14,15],thing:15,this_rank:11,those:15,thought:8,thread:[0,15],threw:8,through:3,throughout:5,time:[0,8,11,13,15],timedelta:11,timefram:13,timeout:[11,15],timer:6,timer_cli:13,timer_request:13,timercli:13,timerrequest:13,timerserv:13,timeseri:8,timestamp:[3,4,8],tini:5,tmp:[9,11],toi:8,toler:[0,2,6,10,11],too:11,toolkit:5,top:3,topolog:0,torch:[0,2,5,9,11,13,14,15],torchelast:[0,1,2,3,4,5,8,9,10,11,12,13,14,15],torchelastic_ag:3,torchelastic_error_fil:3,torchelastic_etcd_binary_path:11,torchelastic_hom:5,torchelastic_max_restart:2,torchelastic_restart_count:2,torchelastic_run_id:2,total:[2,8,11,15],total_num_epoch:14,touch:9,trace:3,traceback:3,track:0,train:[0,2,6,9,10,11],train_app:15,train_loop:11,train_main:15,train_project_dir:15,train_step:2,trainer:[0,2,3,5,9,13,15],trainer_0:3,trainer_1:3,trainer_arg:0,trainer_entrypoint_fn:1,trainer_func:13,trainer_n:3,trainers_per_nod:10,trainsit:11,tranisiton:11,transit:11,tree:3,tri:3,tricki:1,trigger:11,trivial:[0,3,15],try_create_rendezv:11,tsm:6,ttl:11,tune:5,tupl:[0,8,9,11],twice:15,two:[0,5,8,9],type:[0,3,9,11,13,15],typic:[0,2,3,11,13,15],ultim:[3,13],unblock:[11,15],uncaught:[0,3],undefin:[3,15],underli:[0,15],understand:[0,1],unexpect:11,unhandl:0,unhealthi:0,union:[0,2,4,9],uniqu:[0,2,8,11,13,15],unit:[0,2],unix:9,unknown:0,unknownappexcept:15,unless:13,unrecover:0,unsuccess:15,until:[0,11,15],untouch:15,updat:0,upon:[0,3,15],url:[10,11,15],usag:[0,2,4,6,8,9,11,13],use:[0,1,2,3,5,8,9,10,11,12,15],use_env:14,usecas:5,used:[1,2,5,8,9,10,11,13,15],useful:[5,11,13],user:[0,2,3,8,11,14,15],usernam:15,uses:[1,2,5,8,9,11,13],using:[0,2,3,5,8,11,13,15],usr:[0,9,11],valid:[9,11,15],valu:[0,1,2,4,8,9,11,15],variabl:[2,3,5,9,14,15],variou:12,version:[5,11],via:[9,11,15],video:5,view:0,visibl:8,visit:14,w605:11,wai:[3,8,15],wait:[0,9,11,15],wait_for_fin:11,wait_for_p:11,wait_for_rendezvous_to_fre:11,want:8,well:[2,11],were:[0,11,14,15],weren:11,what:[3,8,9,15],whatev:13,when:[0,1,2,3,4,5,9,10,11,13,14,15],where:[0,2,3,11,13],wherea:15,whether:[0,11],which:[0,2,3,9,11,13,15],who:11,window:11,within:[2,11,13,15],without:[3,11,15],word:11,work:[0,2,5,11,12,13,14,15],worker:[0,1,2,3,4,5,11,13,14,15],worker_group:0,worker_id:13,workergroup:[0,2],workerspec:[0,1,2,13],workerst:0,workspac:[5,15],world:[0,2,9,11],world_siz:[0,2,11,14],worst:14,worth:14,would:[0,3,5,11,15],wrap:[3,13,15],write:[0,3,8,9,10,11],written:3,yet:0,yml:5,you:[0,1,2,5,8,10,11,12,13,14,15],your:[1,2,3,5,8,10,11,12,13,14,15],your_training_script:[2,10],yourself:5,zero:15},titles:["Elastic Agent","Customization","Elastic Launch","Error Propagation","Events","Examples","TorchElastic","TorchElastic Kubernetes","Metrics","Multiprocessing","Quickstart","Rendezvous","Cloud Provider Support (Deprecated)","Expiration Timers","Train script","Training Session Manager (TSM)"],titleterms:{"class":3,AWS:12,agent:0,api:[4,15],applic:15,azur:12,build:5,classi:5,client:13,cloud:12,concept:0,contain:[5,15],context:9,custom:[1,13],deprec:12,docker:5,document:[6,15],ec2:12,elast:[0,2],error:3,etcd:11,event:[1,4],exampl:5,except:11,exist:5,experiment:6,expir:13,extend:[0,15],get:6,handler:[1,8,11],imagenet:5,implement:[0,13],implment:11,kubernet:7,launch:2,launcher:[1,2],manag:15,method:[3,4,8,13],metric:[1,8],multi:5,multipl:9,multiprocess:9,node:5,object:4,obtain:5,overview:15,prerequisit:5,process:9,propag:3,provid:12,quickstart:10,rendezv:[1,11],repo:5,resourc:15,role:15,run:5,sampl:5,schedul:15,script:14,server:[0,11,13],session:15,start:[6,9],support:12,timer:13,torchelast:[6,7],train:[14,15],tsm:15,usag:15,vision:5,worker:9,write:13}})