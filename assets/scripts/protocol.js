const clearTypeToEnum = type => {
	switch (type) {
		case 'clear_noplay': return 'CLEAR_NO_PLAY';
		case 'clear_failed': return 'CLEAR_FAILED';
		case 'clear_assist': return 'CLEAR_ASSIST';
		case 'clear_easy': return 'CLEAR_EASY';
		case 'clear_clear': return 'CLEAR_NORMAL';
		case 'clear_hard': return 'CLEAR_HARD';
		case 'clear_ex': return 'CLEAR_EX_HARD';
		case 'clear_fullcombo': return 'CLEAR_FULL_COMBO';
	}
};

const djLevelToEnum = type => {
	switch (type) {
		case 'level_s_aaa': return 'LV_AAA';
		case 'level_s_aa': return 'LV_AA';
		case 'level_s_a': return 'LV_A';
		case 'level_s_b': return 'LV_B';
		case 'level_s_c': return 'LV_C';
		case 'level_s_d': return 'LV_D';
		case 'level_s_e': return 'LV_E';
		case 'level_s_f': return 'LV_F';
	}
};

const pacemakerToEnum = type => {
	switch (type) {
		case 'sg_pacemaker': return `PACEMAKER_PERCENTAGE`;
		case 'sg_riva1': return `PACEMAKER_RIVAL_1`;
		case 'sg_riva2': return `PACEMAKER_RIVAL_2`;
		case 'sg_riva3': return `PACEMAKER_RIVAL_3`;
		case 'sg_riva4': return `PACEMAKER_RIVAL_4`;
		case 'sg_riva5': return `PACEMAKER_RIVAL_5`;
		case 'sg_monly': return `PACEMAKER_MY_BEST`;
		case 'sg_pacemaker_aaa': return 'PACEMAKER_LV_AAA';
		case 'sg_pacemaker_aa': return 'PACEMAKER_LV_AA';
		case 'sg_pacemaker_a': return 'PACEMAKER_LV_A';
		case 'sg_rival_next': return 'PACEMAKER_RIVAL_NEXT';
		case 'sg_riva_top': return 'PACEMAKER_RIVAL_TOP';
		case 'sg_riva_ave': return 'PACEMAKER_RIVAL_AVERAGE';
		case 'sg_altop': return 'PACEMAKER_GLOBAL_BEST';
		case 'sg_alave': return 'PACEMAKER_GLOBAL_AVERAGE';
		case 'sg_dantp': return 'PACEMAKER_CLASS_BEST';
		case 'sg_danav': return 'PACEMAKER_CLASS_AVERAGE';
		case 'sg_lotop': return 'PACEMAKER_REGION_BEST';
		case 'sg_loave': return 'PACEMAKER_REGION_AVERAGE';
		case 'sg_ghost': return 'PACEMAKER_PREVIOUS_GHOST';
		case 'sg_pacemaker_next': return 'PACEMAKER_NEXT';
		case 'sg_pacemaker_nextplus': return 'PACEMAKER_NEXTPLUS';
		case 'sg_shop_top': return 'PACEMAKER_SHOP_TOP';
		case 'sg_shop_next': return 'PACEMAKER_SHOP_NEXT';
		default: return 'PACEMAKER_NONE';
	}
};

const getScorecardOption = (data, option, fallback) => {
	if (typeof data.options !== 'object')
		return fallback;

	if (data.options[option] === undefined)
		return fallback;

	return data.options[option];
};

window.setup = function(scoredata) {
	score = {
		"music": {
			"entryId": scoredata.music.entry_id,
			"title": scoredata.music.title,
			"artist": scoredata.music.artist,
			"genre": scoredata.music.genre
		},
		"chart": {
			"playStyle": (scoredata.player.chart.play_style === 1) ? "STYLE_SP": "STYLE_DP",
			"difficulty": "DIFFICULTY_" + scoredata.player.chart.difficulty.toUpperCase(),
			"rating": scoredata.player.chart.rating,
			"notes": scoredata.player.chart.notes
		},
		"bestClearType": clearTypeToEnum(scoredata.player.score.best_clear_type),
		"clearType": clearTypeToEnum(scoredata.player.score.clear_type),
		"bestDjLevel": djLevelToEnum(scoredata.player.score.best_dj_level),
		"djLevel": djLevelToEnum(scoredata.player.score.dj_level),
		"bestExScore": scoredata.player.score.best_ex_score,
		"exScore": scoredata.player.score.ex_score,
		"bestMissCount": scoredata.player.score.best_miss_count,
		"missCount": scoredata.player.score.miss_count,
		"judgement":{
			"pgreat": scoredata.player.score.judgement.pgreat,
			"great": scoredata.player.score.judgement.great,
			"good": scoredata.player.score.judgement.good,
			"bad": scoredata.player.score.judgement.bad,
			"poor": scoredata.player.score.judgement.poor,
			"comboBreak": scoredata.player.score.combo_break,
			"fast": scoredata.player.score.timing.fast,
			"slow": scoredata.player.score.timing.slow
		},
		"pacemaker":{
			"type": pacemakerToEnum(scoredata.player.score.pacemaker.type),
			"score": scoredata.player.score.pacemaker.target,
			"target": scoredata.player.score.pacemaker.custom
		},
		"dead": scoredata.player.score.dead,
		"player": {
			"djName": scoredata.player.dj_name,
			"playCount": scoredata.player.sp.dj_points,
			"qpro": scoredata.player.qpro
		},
		"timestamp": scoredata.timestamp,
		"gauge": scoredata.player.score.gauge,
		"modifiers": scoredata.player.score.modifiers,
		"config": {
			showMascot: getScorecardOption(scoredata, 'show_mascot', false),
			showChartRating: getScorecardOption(scoredata, 'show_chart_rating', false),
			autoMaxPacemaker: getScorecardOption(scoredata, 'auto_max_pacemaker', false),
		}
	};

	new Vue({el: '#scorecard'});
};