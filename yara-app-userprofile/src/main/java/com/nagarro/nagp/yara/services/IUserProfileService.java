/*
 *
 */
package com.nagarro.nagp.yara.services-app.services;

import java.util.List;

import com.nagarro.nagp.yara-app.common.notifications.dto.UserDTO;
import com.nagarro.nagp.yara-app.models.UserProfile;

/**
 * The Interface IUserProfileService.
 */
public interface IUserProfileService {

	/**
	 * Gets the users.
	 *
	 * @return the users
	 */
	public List<UserProfile> getUsersProfiles();

	/**
	 * Gets the user by id.
	 *
	 * @param id the id
	 * @return the user by id
	 */
	public UserProfile getUserProfileById(Long id);

	public List<UserDTO> getUserDTOsByUserIds(List<String> ids);

	/**
	 * Edits the user.
	 *
	 * @param id      the id
	 * @param profile the profile
	 * @return the user profile
	 */
	public UserProfile editUserProfile(Long id, UserProfile profile);

	/**
	 * Delete user profile.
	 *
	 * @param id the id
	 */
	public void deleteUserProfile(Long id);

	/**
	 * Creates the user profile.
	 *
	 * @param profile the profile
	 * @return the user profile
	 */
	public UserProfile createUserProfile(UserProfile profile);

}
