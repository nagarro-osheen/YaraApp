package com.nagarro.nagp.yara.api-app.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nagarro.nagp.yara-app.exception.models.BaseResponse;
import com.nagarro.nagp.yara-app.models.UserProfile;
import com.nagarro.nagp.yara-app.services.IUserProfileService;

/**
 * The Class UserProfileController.
 */
@RestController
@RequestMapping("/users")
@CrossOrigin(value = "http://localhost:4200")
public class UserProfileController {

	/** The user service. */
	@Autowired
	private IUserProfileService userService;

	/**
	 * Gets the all user profiles.
	 *
	 * @return the all user profiles
	 */
	@GetMapping("/")
	public BaseResponse<List<UserProfile>> getAllUserProfiles() {
		return new BaseResponse<>(userService.getUsersProfiles());
	}

	@PostMapping("/getUsersByIds/")
	public String getUsersByIds(@RequestBody final List<String> userIds) throws JsonProcessingException {
		System.out.println("byUserIds" + userIds.size());
		return new ObjectMapper().writeValueAsString(userService.getUserDTOsByUserIds(userIds));
	}

	/**
	 * Gets the user profile by id.
	 *
	 * @param id the id
	 * @return the user profile by id
	 */
	@GetMapping("/{id}")
	public BaseResponse<UserProfile> getUserProfileById(@PathVariable("id") final Long id) {
		return new BaseResponse<>(userService.getUserProfileById(id));
	}

	/**
	 * Creates the profile.
	 *
	 * @param profile the profile
	 * @return the base response
	 */
	@PostMapping("/")
	public BaseResponse<UserProfile> createProfile(@RequestBody final UserProfile profile) {
		return new BaseResponse<>(userService.createUserProfile(profile));
	}

	/**
	 * Delete profile.
	 *
	 * @param id the id
	 */
	@DeleteMapping("/{id}")
	public void deleteProfile(@PathVariable("id") final Long id) {
		userService.deleteUserProfile(id);
	}

	/**
	 * Edits the profile.
	 *
	 * @param id      the id
	 * @param profile the profile
	 * @return the base response
	 */
	@PutMapping("/{id}")
	public BaseResponse<UserProfile> editProfile(@PathVariable("id") final Long id,
			@RequestBody final UserProfile profile) {
		return new BaseResponse<>(userService.editUserProfile(id, profile));
	}

}
